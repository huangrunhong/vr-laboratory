import { useEffect, useMemo, useRef, useState } from "react";
import {
  Euler,
  Intersection,
  Mesh,
  Object3D,
  PerspectiveCamera,
  Raycaster,
  Vector2,
} from "three";
import { useFrame, useThree } from "@react-three/fiber";

import collisionDetection from "../helpers/collisionDetection";

const isGroundObject = (intersection?: Intersection<Object3D>) =>
  intersection?.object.name.toLowerCase().startsWith("ground");

const findFloor = (raycaster: Raycaster, objects: Object3D[]) => {
  const [intersection] = raycaster.intersectObjects(objects);

  return isGroundObject(intersection) ? intersection : undefined;
};

interface CameraControlProps {
  camera: PerspectiveCamera;
}

const CameraControl = ({ camera }: CameraControlProps) => {
  const state = useThree();

  const circle = useRef<Mesh>(null);

  const count = useRef(0);
  const euler = useMemo(() => new Euler(0, 0, 0, "YXZ"), []);
  const position = useMemo(() => camera.position.clone(), [camera]);
  const raycaster = useMemo(() => new Raycaster(), []);

  const [teleport, setTeleport] = useState(false);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(new Vector2(x, y), camera);

      const floor = findFloor(raycaster, state.scene.children);
      const moveable = !!floor && !collisionDetection(floor.point, state.scene);

      setTeleport(moveable);

      if (moveable && circle.current) {
        circle.current.position.set(floor.point.x, 0.01, floor.point.z);
      }

      if (!euler || !event.buttons) return;

      count.current += 1;

      euler.setFromQuaternion(camera.quaternion);

      euler.y += event.movementX * 0.002;
      euler.x += event.movementY * 0.002;

      camera.quaternion.setFromEuler(euler);
    };

    const onPointerUp = () => {
      if (!circle.current || !circle.current.visible || count.current) {
        return void (count.current = 0);
      }

      const x = circle.current.position.x;
      const y = camera.position.y;
      const z = circle.current.position.z;

      position.set(x, y, z);
    };

    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);

    return () => {
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  useFrame((_, delta) => {
    camera.position.lerp(position, delta * 3);
  });

  useEffect(() => {
    document.body.style.cursor = teleport ? "pointer" : "default";
  }, [teleport]);

  return (
    <mesh ref={circle} rotation-x={-Math.PI / 2} visible={teleport}>
      <ringGeometry args={[0.16, 0.2]} />
      <meshBasicMaterial color={0x0065bd} transparent opacity={0.5} />
    </mesh>
  );
};

export default CameraControl;
