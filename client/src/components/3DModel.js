import React, { useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

const ThreeDModel = () => {
  const modelRef = useRef();

  // Loading 3D Model (assuming you have a GLTF model file)
  const gltfLoader = new THREE.GLTFLoader();
  const modelPath = "/models/yourModel.glb"; // path to your 3D model

  useEffect(() => {
    gltfLoader.load(modelPath, (gltf) => {
      modelRef.current.add(gltf.scene);
    });
  }, [modelPath]);

  return (
    <div className="w-full h-96">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />
        <OrbitControls />
        {/* Add your 3D model */}
        <mesh ref={modelRef} position={[-1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default ThreeDModel;
