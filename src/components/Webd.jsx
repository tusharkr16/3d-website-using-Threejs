import { Canvas } from '@react-three/fiber'
import React from 'react'
import Web from "./Web"
import { OrbitControls, Stage } from '@react-three/drei'

const Webd = () => {
  return (
    <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Web/>
        </Stage>
        <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default Webd;