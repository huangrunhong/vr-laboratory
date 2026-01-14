import { RootState } from '@react-three/fiber';
import { Intersection, Raycaster, Vector3 } from 'three';

const gap = 1;
const raycaster = new Raycaster();

const EYE_HEIGHTS = [0.5, 1, 1.5];

const collisionDetection = (origin: Vector3, state: RootState, desiredMove: Vector3, speed = 3) => {
  if (!desiredMove.lengthSq()) {
    return 0;
  }

  desiredMove.normalize();

  const findMinimumDistance = (intersection: Intersection) =>
    intersection ? Math.min(speed, Math.max(0, intersection.distance - gap)) : speed;

  const distances = EYE_HEIGHTS.flatMap((height) => {
    raycaster.set(origin.clone().setY(height), desiredMove);

    return raycaster.intersectObjects(state.scene.children, true).map(findMinimumDistance);
  });

  return Math.min(...distances);
};

export default collisionDetection;
