import { useState } from 'react';
import { ThreeElements } from '@react-three/fiber';

const RingButton = (props: ThreeElements['group']) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group {...props} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <mesh>
        <ringGeometry args={[0.06, 0.07]} />
        <meshBasicMaterial color={hovered ? 0x0064c0 : 0xffffff} transparent opacity={1} />
      </mesh>
      <mesh>
        <circleGeometry args={[0.06]} />
        <meshBasicMaterial color={0xffffff} transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

export default RingButton;
