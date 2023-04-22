// import React from 'react'
// import styled from 'styled-components';
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, RenderTexture, Text } from "@react-three/drei";


// const Container = styled.div`
// height:100vh;
// width:100vw;
// `;

// const Test = () => {
//     return (
//         <Container>
//             <Canvas>
//                 <OrbitControls enableZoom={false} autoRotate={true} />
//                 <ambientLight intensity={1} />
//                 <directionalLight position={[3, 2, 1]} />
//                 <mesh>
//                     <boxGeometry args={[1, 1, 1]} />
//                     <meshStandardMaterial>
//                         <RenderTexture>
//                             <color attach="background" args
//                                 ={["#dc9dcd"]} />
//                             <Text ref={textRef} fontSize={3} color="#555">
//                                 hello
//                             </Text>
//                      </RenderTexture>
//                     </meshStandardMaterial>
//                 </mesh>
//             </Canvas>
//         </Container>
//     )
// }

// export default Test