import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';

import { Edges, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import { ThemeColors } from 'tailwind.config';

import animations from './animations';
import { Suspense } from 'react';

function Cube() {
  const geometry = new THREE.BoxGeometry(2.5, 2.5, 2.5);

  return (
    <mesh geometry={geometry}>
      <Edges linewidth={3} scale={1.1} color={ThemeColors.orange} />
      <meshBasicMaterial />
    </mesh>
  );
}

function Scene() {
  return (
    <motion.div {...animations.scene} className="absolute flex justify-center items-center h-full w-1/2 right-0 top-0">
      <Suspense fallback={'Loading ...'}>
        <Canvas>
          <Cube />
          <OrbitControls
            rotateSpeed={2}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.5}
            enableZoom={false}
            autoRotate
          />
        </Canvas>
      </Suspense>
    </motion.div>
  );
}

export default Scene;
