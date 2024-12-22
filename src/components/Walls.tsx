interface WallProps {
  x: number;
  z: number;
  width: number;
  rotationY: number;
}

const Wall = ({ x, z, width, rotationY }: WallProps) => (
  <mesh position={[x, 0.5, z]} rotation-y={rotationY}>
    <planeGeometry args={[width, 1]} />
    <meshStandardMaterial color={"orange"} />
  </mesh>
);

const Walls = () => {
  return (
    <group visible={false}>
      <Wall x={11} z={-9.8} width={30} rotationY={0} />
      <Wall x={-4} z={-4.925} width={7.5} rotationY={0} />
      <Wall x={17.5} z={3.1} width={16} rotationY={Math.PI} />
      <Wall x={-1.8} z={3.1} width={13} rotationY={Math.PI} />
      <Wall x={7} z={11.26} width={5.5} rotationY={Math.PI} />
      <Wall x={25.6} z={-3.5} width={13.5} rotationY={-Math.PI / 2} />
      <Wall x={-7.61} z={-0.91} width={8} rotationY={Math.PI / 2} />
      <Wall x={-0.2} z={0.585} width={4.9} rotationY={Math.PI / 2} />
      <Wall x={-0.2} z={-7.325} width={4.8} rotationY={Math.PI / 2} />
      <Wall x={4.685} z={7.25} width={8} rotationY={Math.PI / 2} />
      <Wall x={9.57} z={7.25} width={8} rotationY={-Math.PI / 2} />
    </group>
  );
};

export default Walls;
