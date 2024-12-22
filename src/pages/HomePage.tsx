import { useState } from "react";
import { Selection } from "@react-three/postprocessing";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useXR } from "@react-three/xr";
import { AnimationAction, Object3D, Vector3 } from "three";

import CircleButton from "../components/CircleButton";
import collisionDetection from "../helpers/collisionDetection";
import playOnce from "../helpers/playOnce";
import Selectable from "../components/Selectable";
import SelectionContext from "../contexts/SelectionContext";
import InteractiveObject from "../components/InteractiveObject";
import VideoMaterial from "../components/VideoMaterial";
import Walls from "../components/Walls";

const openDoorButtonPosition = new Vector3(-2.9, 1.3, 0.5);
const startButtonPosition = new Vector3(-1.7, 1.2, 0.5);
const vppButtonPosition = new Vector3(2.95, 1.45, -6.1);
const cameraBox = new Vector3(2, 0.25, 1.5);

const modelPath = "/vr-laboratory/room.glb";
const printerSkinPath = "/vr-laboratory/printerSkin.glb";
const printerPath = "/vr-laboratory/printer.glb";
const vppSkinPath = "/vr-laboratory/vppSkin.glb";
const logoPath = "/vr-laboratory/logo.glb";
const vppPath = "/vr-laboratory/vpp.glb";

const play = (
  camera?: Object3D,
  object?: Object3D,
  action?: AnimationAction | null
) => {
  if (!camera || !object || !action) return;

  const running = action.isRunning();
  const collided = collisionDetection(camera.position, object, cameraBox);

  !running && collided && playOnce(action);
};

const HomePage = () => {
  const xr = useXR();

  const room = useGLTF(modelPath);
  const printerSkin = useGLTF(printerSkinPath);
  const vppSkin = useGLTF(vppSkinPath);
  const vpp = useGLTF(vppPath);
  const printer = useGLTF(printerPath);
  const logo = useGLTF(logoPath);
  const roomActions = useAnimations(room.animations, room.scene);
  const [selected, setSelected] = useState("");
  const printerActions = useAnimations(printer.animations, printer.scene);
  const vppActions = useAnimations(vpp.animations, vpp.scene);

  useFrame((state) => {
    const playAction = (
      object: Object3D | undefined,
      action: AnimationAction | null
    ) =>
      xr.mode
        ? play(xr.origin, object, action)
        : play(state.camera, object, action);

    playAction(
      room.nodes["Door_moving_lobby"],
      roomActions.actions["Door_entrance"]
    );
    playAction(
      room.nodes["Door_moving_social_space"],
      roomActions.actions["Door_social_space"]
    );
  });

  const startPrinter = () => playOnce(printerActions.actions["Start"], 2);

  const onClick = () => {
    const open = printerActions.actions["openDoor"]?.time ?? 0;
    const close = printerActions.actions["doorClose"]?.time ?? 0;

    playOnce(
      open <= close
        ? printerActions.actions["openDoor"]
        : printerActions.actions["doorClose"]
    );
  };

  const startVpp = () => playOnce(vppActions.actions["Play"], 2);

  return (
    <SelectionContext.Provider value={[selected, setSelected]}>
      <primitive object={room.scene} />
      <primitive object={logo.scene} />
      <Walls />
      <Selection>
        {/* <EffectComposer multisampling={8} autoClear={false}>
          <Outline
            blur
            visibleEdgeColor={0xffffff}
            edgeStrength={100}
            width={800}
          />
        </EffectComposer> */}
        <InteractiveObject
          id="printer"
          activeObject={
            <>
              <group>
                <primitive object={printer.scene} />{" "}
              </group>
              <mesh rotation-y={Math.PI}>
                <CircleButton
                  position={openDoorButtonPosition}
                  onClick={onClick}
                />
                <CircleButton
                  position={startButtonPosition}
                  onClick={startPrinter}
                />
              </mesh>
              <VideoMaterial
                url="/vr-laboratory/video.mp4"
                x={3.315}
                y={1.259}
                z={-0.569}
                width={0.51}
                height={0.33}
              />
            </>
          }
          inactiveObject={<primitive object={printerSkin.scene} />}
        />

        <Selectable>
          <InteractiveObject
            id="vpp"
            activeObject={
              <>
                <primitive object={vpp.scene} />
                <mesh rotation-y={2 * Math.PI}>
                  <CircleButton
                    onClick={startVpp}
                    position={vppButtonPosition}
                  />
                </mesh>
              </>
            }
            inactiveObject={<primitive object={vppSkin.scene} />}
          />
        </Selectable>
      </Selection>
    </SelectionContext.Provider>
  );
};

export default HomePage;
