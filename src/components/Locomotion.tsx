import { Box2, Vector2, Vector3 } from "three";

import { XROrigin, useXR, useXRControllerLocomotion } from "@react-three/xr";

const entrance = new Box2(new Vector2(-6.75, -4.1), new Vector2(0.41, 2.55));
const mainHall = new Box2(new Vector2(-0.02, -9.6), new Vector2(25, 2.45));
const sideHall = new Box2(new Vector2(4.45, 2.44), new Vector2(8.8, 10.47));

const inRange = (x: number, z: number) => {
  const point = new Vector2(x, z);
  return (
    entrance.containsPoint(point) ||
    mainHall.containsPoint(point) ||
    sideHall.containsPoint(point)
  );
};

interface LocomotionProps {
  x: number;
  y: number;
  z: number;
}

const Locomotion = ({ x, y, z }: LocomotionProps) => {
  const xr = useXR();

  useXRControllerLocomotion((translation, rotation, delta) => {
    if (!xr.origin) return;

    const x = xr.origin.position.x + translation.x * delta * 2;
    const z = xr.origin.position.z + translation.z * delta * 2;

    xr.origin.rotation.y += rotation;

    if (!inRange(x, z)) return;

    xr.origin.position.x = x;
    xr.origin.position.z = z;
  });

  return <XROrigin position={new Vector3(x, y, z)} />;
};

export default Locomotion;
