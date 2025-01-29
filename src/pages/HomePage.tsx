import { useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Vector3 } from "three";

import CircleButton from "../components/CircleButton";
import playOnce from "../helpers/playOnce";
import Selectable from "../components/Selectable";
import SelectionContext from "../contexts/SelectionContext";
import InteractiveObject from "../components/InteractiveObject";
import VideoMaterial from "../components/VideoMaterial";

import ControlPanel from "../components/dashboard/ControlPanel";

const openDoorButtonPosition = new Vector3(-2.9, 1.3, 0.5);
const startButtonPosition = new Vector3(-1.7, 1.2, 0.5);
const vppButtonPosition = new Vector3(3.15, 1.35, -6.275);

const modelPath = "/vr-laboratory/room.glb";
const printerSkinPath = "/vr-laboratory/printerSkin.glb";
const printerPath = "/vr-laboratory/printer.glb";
const vppSkinPath = "/vr-laboratory/vppSkin.glb";
const logoPath = "/vr-laboratory/logo.glb";
const vppPath = "/vr-laboratory/vpp.glb";

const HomePage = () => {
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

  const openDoor = () => playOnce(roomActions.actions["Door_entrance"], 2);
  const openSocialSpace = () =>
    playOnce(roomActions.actions["Door_social_space"], 2);

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
      <mesh rotation-y={Math.PI / 2}>
        <CircleButton
          onClick={openDoor}
          position={[4.2, 1, -0.25]}
          color={0x707070}
          innerSize={0.07}
          outSize={0.08}
        />
      </mesh>
      <mesh rotation-y={-Math.PI / 2}>
        <CircleButton
          onClick={openDoor}
          position={[-4.2, 1, 0.35]}
          color={0x707070}
          innerSize={0.07}
          outSize={0.08}
        />
      </mesh>
      <mesh rotation-y={Math.PI}>
        <CircleButton
          onClick={openSocialSpace}
          position={[-8, 1, -3.1]}
          color={0x707070}
          innerSize={0.07}
          outSize={0.08}
        />
      </mesh>
      <mesh rotation-y={2 * Math.PI}>
        <CircleButton
          onClick={openSocialSpace}
          position={[8, 1, 3.25]}
          color={0x707070}
          innerSize={0.07}
          outSize={0.08}
        />
      </mesh>
      <ControlPanel />
      <InteractiveObject
        id="printer"
        activeObject={
          <>
            <group>
              <primitive object={printer.scene} />
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
                <CircleButton onClick={startVpp} position={vppButtonPosition} />
              </mesh>
            </>
          }
          inactiveObject={<primitive object={vppSkin.scene} />}
        />
      </Selectable>
    </SelectionContext.Provider>
  );
};

export default HomePage;
