interface transparentButtonProps {
  x: number;
  y: number;
  z: number;
  rotationX: number;
  rotationY: number;
  rotationZ: number;
  onClick: () => void;
}

const TransparentButton = ({
  x,
  y,
  z,
  rotationX,
  rotationY,
  rotationZ,
  onClick,
}: transparentButtonProps) => {
  return (
    <mesh position={[x, y, z]} rotation={[rotationX, rotationY, rotationZ]} onClick={onClick}>
      <planeGeometry args={[0.08, 0.2]} />
      <meshBasicMaterial color={0x000000} transparent={true} opacity={0.0001} />
    </mesh>
  );
};

export default TransparentButton;
