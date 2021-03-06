export const Shaders = (color: string) => {
  const vertex = `

        @vertex
        fn main(@builtin(vertex_index) VertexIndex: u32) -> @builtin(position) vec4<f32> {
            var pos = array<vec2<f32>,3>(
                vec2<f32>(0.0, 0.5),
                vec2<f32>(-0.5, -0.5),
                vec2<f32>(0.5, -0.5)
            );
            return vec4<f32>(pos[VertexIndex], 0.0, 1.0);
        }
    `;

  const fragment = `
        @fragment
        fn main() -> @location(0) vec4<f32> {
            return vec4<f32>${color};
        }
    `;

  return { vertex: vertex, fragment: fragment };
};

//vertex
//1) create an array of 3 vec2 float coordiantes which will be the vertices of our triangle
//2) define an out vec4<f32> variable
//
