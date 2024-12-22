import { useVideoTexture } from "@react-three/drei";

interface VideoMaterialProps {
  url: string;
  x: number;
  y: number;
  z: number;
  width: number;
  height: number;
}

const VideoMaterial = ({ url, x, y, z, width, height }: VideoMaterialProps) => {
  const texture = useVideoTexture(url);
  return (
    <mesh position={[x, y, z]} rotation={[0, Math.PI, 0]}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

export default VideoMaterial;
