import { useMemo } from 'react';
import { Vector3 } from 'three';
import { XROrigin, useXR, useXRControllerLocomotion } from '@react-three/xr';
import { useThree } from '@react-three/fiber';

import collisionDetection from '../helpers/collisionDetection';

interface LocomotionProps {
  x: number;
  y: number;
  z: number;
}

const Locomotion = ({ x, y, z }: LocomotionProps) => {
  const xr = useXR();
  const state = useThree();
  const position = useMemo(() => new Vector3(x, y, z), [x, y, z]);

  useXRControllerLocomotion((translation, rotation, delta) => {
    if (!xr.origin) return;

    xr.origin.rotation.y += rotation;

    const desiredMove = new Vector3(translation.x, 0, translation.z);

    xr.origin.position.addScaledVector(
      desiredMove,
      collisionDetection(xr.origin.position, state, desiredMove, delta * 2)
    );
  });

  return <XROrigin position={position} />;
};

export default Locomotion;
