import { clear } from "console";
import $ from "jquery";
import { checkWebGpu } from "./helper";
import { Shaders } from "./shaders";

const CreateTriangle = async () => {
  if (!checkWebGpu) {
    throw new Error("WebGpu not supported");
  }
  const canvas = document.getElementById("canvas-webgpu") as HTMLCanvasElement;
  const adapter = (await navigator.gpu.requestAdapter()) as GPUAdapter; //adapter is just to get a GPUDevice
  if (!adapter) {
    console.error("WebGPU cannot be initialized - Adapter not found");
    return null;
  }
  const device = (await adapter.requestDevice()) as GPUDevice; //contact to work with the hardware and provide gpu objects such as buffers and textures
  //as well as run commmands
  device.lost.then(() => {
    console.error("WebGPU cannot be initialized - Device has been lost");
    return null;
  });

  const context = canvas.getContext("webgpu") as unknown as GPUCanvasContext;
  if (!context) {
    console.error(
      "WebGPU cannot be initialized - Canvas does not support WebGPU"
    );
    return null;
  }

  //code that defines the swapchain
  //defines the webgpu output format

  const swapChainFormat = "bgra8unorm";

  context.configure({
    format: swapChainFormat,
    device: device,
  });

  //setup rendering pipeline
  const shader = Shaders();
  const pipeline = device.createRenderPipeline({
    vertex: {
      entryPoint: "vs_main",
      module: device.createShaderModule({
        code: shader.vertex,
      }),
    },
    fragment: {
      entryPoint: "fs_main",
      targets: [{ format: swapChainFormat }],
      module: device.createShaderModule({
        code: shader.fragment,
      }),
    },
    primitive: { topology: "triangle-list" },
    layout: "auto",
  });

  //render pass and command encoder
  const commandEncoder = device.createCommandEncoder(); //javascript object that builds a buffered batch of commands that will be sent to the gpu

  const textureView = context.getCurrentTexture().createView();
  const renderPass = commandEncoder.beginRenderPass({
    //begin the render pass here with this function with the Render pass descriptor passed as parameter
    //we only use a color attachment right now that is an array to store image information
    //in the view attribute it stores the rendering result on the current image of the swapchain
    colorAttachments: [
      {
        view: textureView,
        clearValue: { r: 0.5, g: 0.5, b: 0.8, a: 1 },
        loadOp: "clear",
        storeOp: "store",
      },
    ],
  });
  renderPass.setPipeline(pipeline);
  renderPass.draw(3, 1, 0, 0);
  //parameter 1 is the number of vertices
  //2 the number of drawing instance
  //...
  renderPass.end(); //finish describing our renderpass

  device.queue.submit([commandEncoder.finish()]); //submit to queue
};

CreateTriangle();
$("#id-btn").on("click", () => {
  const color = $("#id-color").val() as string;
  CreateTriangle();
});
