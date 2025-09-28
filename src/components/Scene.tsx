import { useMemo } from 'react';
import { PerspectiveCamera, Vector3 } from 'three';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import { IfSessionModeSupported, XR, XRStore } from '@react-three/xr';

import CameraControl from './CameraControl';
import Locomotion from './Locomotion';

const createPerspectiveCamera = (x: number, z: number) => {
  const camera = new PerspectiveCamera();

  camera.position.set(x, 1.6, z);
  camera.lookAt(new Vector3(0, 1.6, -1));

  return camera;
};

interface SceneProps {
  children: React.ReactNode;
  origin: [number, number];
  store: XRStore;
  environmentFile?: string;
  environmentIntensity?: number;
}

const Scene = ({ children, origin, store, environmentFile, environmentIntensity }: SceneProps) => {
  const camera = useMemo(() => createPerspectiveCamera(...origin), [origin]);

  return (
    <main>
      <div className="splash-screen">
        <span className="spinner" />
        <h1>
          <strong>TUM.</strong>
          <span>Additive</span>
        </h1>
        <h2>Virtual Reality Lab</h2>
      </div>
      <IfSessionModeSupported mode="immersive-vr">
        <div className="vr">
          <button onClick={() => store.enterVR()}>Enter VR</button>
        </div>
      </IfSessionModeSupported>
      <Canvas camera={camera}>
        <XR store={store}>
          <CameraControl camera={camera} />
          <Locomotion x={origin[0]} y={0} z={origin[1]} />
          {children}
          <ambientLight intensity={0.6} />
          <Environment
            files={environmentFile}
            environmentIntensity={environmentIntensity}
            backgroundRotation={[0, 1.05 * Math.PI, 0]}
          />
          <color attach="background" args={[0xffffff]} />
        </XR>
      </Canvas>
    </main>
  );
};

export default Scene;
