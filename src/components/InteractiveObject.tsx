import { useContext } from "react";

import SelectionContext from "../contexts/SelectionContext";
import ActiveButton from "./ActiveButton";

interface InteractiveObjectProps {
  id: string;
  activeObject: React.ReactNode;
  inactiveObject: React.ReactNode;
  positionX: number;
  positionY: number;
  positionZ: number;
  rotationY: number;
  machineName: string;
}

const InteractiveObject = ({
  id,
  activeObject,
  inactiveObject,
  positionX,
  positionY,
  positionZ,
  rotationY,
  machineName,
}: InteractiveObjectProps) => {
  const [selected, setSelected] = useContext(SelectionContext);

  return (
    <>
      <group>
        <group visible={selected === id}>{activeObject}</group>
        <group visible={selected !== id}>
          <ActiveButton
            onPointerDown={() => setSelected(id)}
            positionX={positionX}
            positionY={positionY}
            positionZ={positionZ}
            rotationY={rotationY}
            machineName={machineName}
          />
          {inactiveObject}
        </group>
      </group>
    </>
  );
};

export default InteractiveObject;
