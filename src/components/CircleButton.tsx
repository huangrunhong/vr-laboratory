import { animated } from "@react-spring/three";
import { GroupProps } from "@react-three/fiber";
import { useState } from "react";

interface CircleButtonProps extends GroupProps {
  color?: number;
  innerSize?: number;
  outSize?: number;
}

const CircleButton = ({
  color = 0xffffff,
  innerSize = 0.06,
  outSize = 0.07,
  ...props
}: CircleButtonProps) => {
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
        <ringGeometry args={[innerSize, outSize]} />
        <animated.meshBasicMaterial color={color} transparent opacity={1} />
      </mesh>
      <mesh>
        <circleGeometry args={[innerSize]} />
        <meshBasicMaterial
          color={hovered ? 0x0065bd : color}
          transparent
          opacity={0.6}
        />
      </mesh>
    </group>
  );
};

export default CircleButton;
