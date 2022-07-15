export const Shaders = () => {
  const vertex = `

        const color = array<vec3<f32>,3>(
          vec3<f32>(1.0,0.0,0.0),
          vec3<f32>(0.0,1.0,0.0),
          vec3<f32>(0.0,0.0,1.0)
        );
        
        const pos = array<vec2<f32>,3>(
          vec2<f32>(0.0, 0.5),
          vec2<f32>(-0.5, -0.5),
          vec2<f32>(0.5, -0.5)
        );

        struct VertexOutput {
          @builtin(position) Position: vec4<f32>,
          @location(0) color: vec4<f32>,
       };

        @vertex
        fn vs_main(@builtin(vertex_index) VertexIndex: u32) -> VertexOutput {
            return VertexOutput(vec4<f32>(pos[VertexIndex], 0.0, 1.0), vec4<f32>(color[VertexIndex],1.0));
        }
    `;

  const fragment = `
        struct VertexOutput {
           @builtin(position) Position: vec4<f32>,
          @location(0) color: vec4<f32>,
        };
        
        @fragment
        fn fs_main(vertexShaderData: VertexOutput) -> @location(0) vec4<f32> {
            return vertexShaderData.color;
        }
    `;

  return { vertex: vertex, fragment: fragment };
};

//vertex
//1) create an array of 3 vec2 float coordiantes which will be the vertices of our triangle
//2) define an out vec4<f32> variable
//
