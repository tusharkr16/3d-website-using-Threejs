import React from 'react'
import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import Logo from "./Logo";

const Development = () => {
  return (
    <Canvas>
    <Stage environment="city" intensity={0.6}>
      <Logo/>
    </Stage>
    <OrbitControls enableZoom={false} />
</Canvas>
  )
}

export default Development