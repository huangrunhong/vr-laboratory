import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { IfSessionModeSupported, XR, XRStore } from "@react-three/xr";

import Camera from "./Camera";
import Locomotion from "./Locomotion";

interface SceneProps {
  children: React.ReactNode;
  origin: [number, number];
  store: XRStore;
  environmentFile: string;
  environmentIntensity: number;
  backgroundIntensity: number;
  backgroundFile: string;
}

const Scene = ({
  children,
  origin,
  store,
  environmentFile,
  backgroundFile,
  environmentIntensity,
  backgroundIntensity,
}: SceneProps) => (
  <main>
    <IfSessionModeSupported mode="immersive-vr">
      <div className="vr">
        <button onClick={() => store.enterVR()}>Enter VR</button>
      </div>
    </IfSessionModeSupported>
    <Canvas>
      <XR store={store}>
        <Camera x={origin[0]} y={1.6} z={origin[1]} />
        <Locomotion x={origin[0]} y={0} z={origin[1]} />
        {children}
        <Environment
          files={backgroundFile}
          environmentIntensity={backgroundIntensity}
          background
          backgroundRotation={[0, 1.05 * Math.PI, 0]}
        />
        <Environment
          files={environmentFile}
          environmentIntensity={environmentIntensity}
        />
        {/* <Stats /> */}
      </XR>
    </Canvas>
  </main>
);

export default Scene;
