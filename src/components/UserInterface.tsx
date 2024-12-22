import { DoubleSide } from "three";

const UserInterface = () => {
  return (
    <group>
      <mesh position={[2.4, 0.81, -0.4]} scale={[0.8, 0.2, 0.1]}>
        <planeGeometry />
        <meshBasicMaterial
          color={0xffffff}
          side={DoubleSide}
          transparent
          opacity={0.5}
        />
      </mesh>
      <mesh position={[3, 1, -1.1]}>
        <circleGeometry args={[1]} />
        <meshBasicMaterial color={0xfff000} transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

export default UserInterface;
