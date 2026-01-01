import { RootState } from '@react-three/fiber';
import { Raycaster, Vector3 } from 'three';

const gap = 1;
const raycaster = new Raycaster();

const collisionDetection = (origin: Vector3, state: RootState, desiredMove: Vector3, speed = 3) => {
  if (!desiredMove.lengthSq()) {
    return 0;
  }

  desiredMove.normalize();
  raycaster.set(origin, desiredMove);

  const [intersection] = raycaster.intersectObjects(state.scene.children, true);

  return intersection ? Math.min(speed, Math.max(0, intersection.distance - gap)) : speed;
};

export default collisionDetection;
