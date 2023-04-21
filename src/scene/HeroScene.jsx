import React from 'react'
import { Zombie } from '../models/Zombie'
import { OrbitControls, PerspectiveCamera, useCamera } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'


const HeroScene = () => {
    const { camera } = useThree()
    useFrame(() => {
        // console.log(camera.position)
        // console.log(camera.rotation)

    })

    return (
        <>
            <PerspectiveCamera position={[0.27851117668840264, 1.02656003041365, 2.408222502206204]} rotation={[
                0.3246914278813239, 0.051637432203237674, -0.017371904801336196]} makeDefault />
            {/* <OrbitControls /> */}
            <ambientLight intensity={0.9} />
            <Zombie />
        </>
    )
}

export default HeroScene