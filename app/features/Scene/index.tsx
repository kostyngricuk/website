import { motion } from 'motion/react';
import { Canvas } from '@react-three/fiber';

import { Edges, OrbitControls } from '@react-three/drei';
import { BoxGeometry, LineDashedMaterial } from 'three';

import { ThemeColors } from 'tailwind.config';

import animations from './animations';

function Cube() {
  const geometry = new BoxGeometry(1, 4, 1);
  const material = new LineDashedMaterial();

  return (
    <mesh geometry={geometry} material={material}>
      <Edges linewidth={3} scale={1.1} color={ThemeColors.orange} />
    </mesh>
  );
}

function Scene() {
  return (
    <motion.div {...animations.scene} className="absolute flex justify-center items-center h-full right-0 top-0 w-2/4">
      <Canvas>
        <Cube />
        <OrbitControls
          makeDefault
          rotateSpeed={2}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.5}
          enableZoom={false}
          autoRotate
        />
      </Canvas>
    </motion.div>
  );
}

export default Scene;
