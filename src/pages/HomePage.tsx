import { useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { Color, MeshStandardMaterial, Vector3 } from "three";

import playOnce from "../helpers/playOnce";
import CircleButton from "../components/CircleButton";
import SelectionContext from "../contexts/SelectionContext";
import InteractiveObject from "../components/InteractiveObject";
import TutorialPanel from "../components/tutorial/TutorialPanel";
import AmHubPanel from "../components/amhub/AmHubPanel";
import TransparentButton from "../components/TransparentButton";
import BinderJettingPanel from "../components/binderJetting/BinderJettingsPanel";
import isMesh from "../helpers/isMesh";
import VppPanel from "../components/vpp/VppPanel";

const openDoorButtonPosition = new Vector3(-2.9, 1.3, -0.915);
// const startButtonPosition = new Vector3(-1.8, 1.2, -0.925);
const vppButtonPosition = new Vector3(4, 1.35, -7.875);

const modelPath = "/vr-laboratory/room.glb";
const printerSkinPath = "/vr-laboratory/printerSkin.glb";
const printerPath = "/vr-laboratory/printer.glb";
const vppSkinPath = "/vr-laboratory/vppSkin.glb";
const logoPath = "/vr-laboratory/logo.glb";
const vppPath = "/vr-laboratory/vpp.glb";
const lobbyBoxPath = "/vr-laboratory/lobbyBox.glb";

const outlinedObjects = [
  "BuildPlatform",
  "PrintHead",
  "Recoater",
  "CleaningUnit",
];

const HomePage = () => {
  const room = useGLTF(modelPath);
  const printerSkin = useGLTF(printerSkinPath);
  const vppSkin = useGLTF(vppSkinPath);
  const vpp = useGLTF(vppPath);
  const printer = useGLTF(printerPath);
  const logo = useGLTF(logoPath);
  const lobbyBox = useGLTF(lobbyBoxPath);

  const [selected, setSelected] = useState("");
  const [activeStart, setActiveStart] = useState(false);

  const roomActions = useAnimations(room.animations, room.scene);
  const printerActions = useAnimations(printer.animations, printer.scene);
  const vppActions = useAnimations(vpp.animations, vpp.scene);
  const lobbyBoxActions = useAnimations(lobbyBox.animations, lobbyBox.scene);

  const openDoor = () => playOnce(roomActions.actions["Door_entrance"], 2);
  const openSocialSpace = () =>
    playOnce(roomActions.actions["Door_social_space"], 2);

  const appearBlueLine = () => {
    playOnce(roomActions.actions["Lobby_1"], 2);
    setActiveStart(true);
  };

  // const startPrinter = () => playOnce(printerActions.actions["Start"], 2);

  const openBox = () => playOnce(lobbyBoxActions.actions["Lobby_2"], 2);
  const activeTum = () => playOnce(lobbyBoxActions.actions["Lobby_3"], 2);
  const activeFraunhofer = () => playOnce(roomActions.actions["Hub_2"], 2);
  const activeMicroFactory = () => playOnce(roomActions.actions["Hub_1"], 2);

  const cleanPrintHead = () =>
    playOnce(printerActions.actions["CleanPrintHead"], 2);
  const printTestPatterns = () =>
    playOnce(printerActions.actions["PrintTestPatterns"], 2);
  const coatInitialLayers = () =>
    playOnce(printerActions.actions["CoatlnitialLayers"], 2);
  const startPrinting = () =>
    playOnce(printerActions.actions["StartPrinting"], 2);
  const displayPart = () => playOnce(printerActions.actions["DisplayPart"], 1);
  const onClick = () => {
    const open = printerActions.actions["DoorOpen"]?.time ?? 0;
    const close = printerActions.actions["DoorClose"]?.time ?? 0;
    playOnce(
      open <= close
        ? printerActions.actions["DoorOpen"]
        : printerActions.actions["DoorClose"]
    );
  };

  const startVpp = () => playOnce(vppActions.actions["Play"], 2);

  console.log(printerActions.actions);

  const highlightSelection = (selected: number) =>
    outlinedObjects.forEach((object, index) => {
      const node = printer.nodes[object];
      const meshes = isMesh(node)
        ? [node]
        : (node?.children?.filter(isMesh) ?? []);

      meshes.forEach((mesh) => {
        const material = [mesh.material].flat()[0]?.clone();

        if (material instanceof MeshStandardMaterial) {
          material.emissive = new Color(
            selected === index ? "#0064c0" : "black"
          );
        }

        mesh.material = material;
      });
    });

  return (
    <SelectionContext.Provider value={[selected, setSelected]}>
      <primitive object={room.scene} />
      <primitive object={logo.scene} />

      <mesh rotation-y={Math.PI / 2}>
        <CircleButton
          onClick={openDoor}
          position={[4.2, 1, -0.25]}
          color={0x707090}
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
          position={[-9.35, 1, -3.1]}
          color={0x707070}
          innerSize={0.07}
          outSize={0.08}
        />
      </mesh>
      <mesh rotation-y={2 * Math.PI}>
        <CircleButton
          onClick={openSocialSpace}
          position={[9.35, 1, 3.25]}
          color={0x707070}
          innerSize={0.07}
          outSize={0.08}
        />
      </mesh>
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
              {/* <CircleButton
                position={startButtonPosition}
                onClick={startPrinter}
              /> */}
            </mesh>
            <mesh
              position={[5.6, 1.35, 0.12]}
              rotation-y={-(Math.PI * 4.5) / 6}
            >
              <boxGeometry args={[2.5, 1.5, 0.01]} />
              <meshBasicMaterial color={0xffffff} />
            </mesh>

            <BinderJettingPanel
              cleanPrintHead={cleanPrintHead}
              printTestPatterns={printTestPatterns}
              coatInitialLayers={coatInitialLayers}
              startPrinting={startPrinting}
              displayPart={displayPart}
              openBJT={onClick}
              onSelectComponent={highlightSelection}
            />
          </>
        }
        inactiveObject={<primitive object={printerSkin.scene} />}
      />
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
      {activeStart && (
        <>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <CircleButton
              onClick={openBox}
              position={[-2.36, 0.1, 1.24]}
              color={0x707070}
              innerSize={0.04}
              outSize={0.05}
            />
          </mesh>
          <mesh position={[0, 0, 0]}>
            <primitive object={lobbyBox.scene} />
          </mesh>
        </>
      )}
      <TransparentButton
        x={-2.2815}
        y={1.505}
        z={-0.08}
        rotationX={0}
        rotationY={-Math.PI / 2}
        rotationZ={Math.PI / 2}
        onClick={activeTum}
      />

      <TransparentButton
        x={8.042}
        y={1.63}
        z={9.965}
        rotationX={0}
        rotationY={Math.PI / 2}
        rotationZ={Math.PI / 2}
        onClick={activeFraunhofer}
      />
      <TransparentButton
        x={12.767}
        y={1.63}
        z={9.955}
        rotationX={0}
        rotationY={-Math.PI / 2}
        rotationZ={Math.PI / 2}
        onClick={activeMicroFactory}
      />
      <TutorialPanel onClick={appearBlueLine} />
      <VppPanel />
      <AmHubPanel />
    </SelectionContext.Provider>
  );
};

export default HomePage;
