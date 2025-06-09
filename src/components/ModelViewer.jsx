import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';

// Komponenta za učitavanje i prikaz 3D modela
function Model({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} />;
}

// Glavna komponenta za prikaz 3D modela unutar Canvas-a
export default function ModelViewer({ modelPath }) {
  return (
    <div className="w-full h-64 bg-gray-100 rounded-md overflow-hidden">
      <Canvas camera={{ position: [0, 1, 3], fov: 50 }}>
        {/* Osnovna svjetla */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        {/* Učitavanje modela i okruženja */}
        <Suspense fallback={null}>
          <Model modelPath={modelPath} />
          <Environment preset="city" />
        </Suspense>
        {/* Kontrole za rotaciju i zoom */}
        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
