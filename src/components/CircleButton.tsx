import { animated } from "@react-spring/three";
import { GroupProps } from "@react-three/fiber";
import { useState } from "react";

const CircleButton = (props: GroupProps) => {
  const [hovered, setHovered] = useState(false);
  const [actived, setActived] = useState(false);

  return (
    <group
      {...props}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onPointerDown={() => setActived(true)}
      onPointerLeave={() => setActived(false)}
      scale={actived ? 0.9 : 1}
    >
      <mesh>
        <ringGeometry args={[0.06, 0.07]} />
        <animated.meshBasicMaterial color={0xffffff} transparent opacity={1} />
      </mesh>
      <mesh>
        <circleGeometry args={[0.06]} />
        <meshBasicMaterial
          color={hovered ? 0x3070b3 : 0xffffff}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

export default CircleButton;
