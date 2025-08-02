import { useMemo } from "react";
import { Box2, Vector2, Vector3 } from "three";
import { XROrigin, useXR, useXRControllerLocomotion } from "@react-three/xr";

const entrance = new Box2(new Vector2(-7.05, -4.45), new Vector2(0, 2.75));
const mainHall = new Box2(new Vector2(-0.02, -9.4), new Vector2(25.25, 2.75));
const sideHall = new Box2(new Vector2(8.45, 2.7), new Vector2(12.35, 10.77));

const inRange = (point: Vector2) =>
  entrance.containsPoint(point) ||
  mainHall.containsPoint(point) ||
  sideHall.containsPoint(point);

interface LocomotionProps {
  x: number;
  y: number;
  z: number;
}

const Locomotion = ({ x, y, z }: LocomotionProps) => {
  const xr = useXR();
  const position = useMemo(() => new Vector3(x, y, z), [x, y, z]);

  useXRControllerLocomotion((translation, rotation, delta) => {
    if (!xr.origin) return;

    const x = xr.origin.position.x + translation.x * delta * 2;
    const z = xr.origin.position.z + translation.z * delta * 2;

    xr.origin.rotation.y += rotation;

    if (!inRange(new Vector2(x, z))) return;

    xr.origin.position.x = x;
    xr.origin.position.z = z;
  });

  return <XROrigin position={position} />;
};

export default Locomotion;
