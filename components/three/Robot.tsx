// components/Robot.tsx
"use client";
import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const Robot = () => {
  const robotRef = useRef<any>();
  const { scene, animations } = useGLTF('robot_playground.glb'); // Remplacez par le chemin de votre fichier GLB
  const { actions } = useAnimations(animations, robotRef);

  useEffect(() => {
    if (actions) {
      // Affichez les actions disponibles dans la console pour vérifier le nom correct de l'animation
      console.log("Available actions: ", actions);
      
      const actionName = 'Experiment'; // Remplacez par le nom de votre animation si différent
      if (actions[actionName]) {
        actions[actionName].play();
      } else {
        console.warn(`Animation '${actionName}' not found`);
      }
    }
  }, [actions]);

  return <primitive ref={robotRef} object={scene} scale={[1.5, 1.5, 1.5]} />; // Ajustez l'échelle ici
};

const RobotCanvas = () => {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, -5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Robot />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RobotCanvas;
