import { useState } from 'react';
import { animated } from '@react-spring/three';
import { ThreeElements } from '@react-three/fiber';

type CircleButtonProps = ThreeElements['group'] & {
  size?: number;
  color?: number;
};

const CircleButton = ({ color = 0x707070, size = 0.06, ...props }: CircleButtonProps) => {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <group
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setActive(true)}
      onPointerLeave={() => setActive(false)}
      scale={active ? 0.9 : 1}
    >
      <mesh>
        <ringGeometry args={[size, size + 0.01]} />
        <animated.meshBasicMaterial color={color} transparent opacity={1} />
      </mesh>
      <mesh>
        <circleGeometry args={[size]} />
        <meshBasicMaterial color={hovered ? 0x0065bd : color} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

export default CircleButton;
