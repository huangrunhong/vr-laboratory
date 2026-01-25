interface AirButtonProps {
  position: [number, number, number];
  rotation: [number, number, number];
  onClick: () => void;
}

const angles = (rotation: [number, number, number]) =>
  rotation.map((number) => number * Math.PI) as [number, number, number];

const AirButton = ({ position, rotation, onClick }: AirButtonProps) => (
  <mesh position={position} rotation={angles(rotation)} onClick={onClick}>
    <planeGeometry args={[0.08, 0.2]} />
    <meshBasicMaterial color={0x000000} transparent={true} opacity={0} />
  </mesh>
);

export default AirButton;
