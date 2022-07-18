function Glinstance(canvasID:string) {
  let canvas = document.getElementById(canvasID) as HTMLCanvasElement;
  let gl = canvas.getContext("webgl2");
  if (!gl) {
    console.error("webgl context not available.");
    throw new Error("webgl context not available");
  } 
  return gl;
}

let gl = Glinstance("glcanvas");

gl.clearColor(1.0,0.0,0.0,1.0);

gl.clear(gl.COLOR_BUFFER_BIT| gl.DEPTH_BUFFER_BIT);

gl.canvas.style.width = "500px";
gl.canvas.style.height = "500px";
gl.canvas.width = 500;
gl.canvas.height = 500;
gl.viewport(0,0,500,500);


