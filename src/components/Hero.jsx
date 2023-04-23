import React, { Suspense }  from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

import line from "../components/images/line.png";
import moon from "../components/images/moon.png";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items:center;

  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 100vh;
  }

`;
const Title = styled.h1`
  font-size: 44px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Container = styled.div`
height:100vh;
scroll-snap-align:center;
width:1440px;
display: flex;
justify-content:space-between;

@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
`;
const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Line = styled.img`
  height: 5px;
`;
const Subtitle = styled.h2`
  color: #da4ea2;
  
`;
const Desc = styled.p`
  font-size: 14px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 400;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(20px);
    }
`;

const Hero = () => {
  return (
    <Section>
        <Navbar/>
        <Container>
    <Left>
        <Title>Think. Make. Solve.</Title>
        <WhatWeDo>
        <Line src={line} />
        <Subtitle>What we Do</Subtitle>
        </WhatWeDo>
        <Desc>
            we enjoy creating delightful, human-centered digital experiences.
          </Desc>
          <Button>Learn More</Button>
    </Left>
    <Right>
    <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.6}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
        <Img src={moon} alt="" />
    </Right>
        </Container>
    </Section>
  )
}

export default Hero