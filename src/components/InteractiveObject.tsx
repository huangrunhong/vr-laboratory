import { useContext } from "react";

import SelectionContext from "../contexts/SelectionContext";

interface InteractiveObjectProps {
  id: string;
  activeObject: React.ReactNode;
  inactiveObject: React.ReactNode;
}

const InteractiveObject = ({
  id,
  activeObject,
  inactiveObject,
}: InteractiveObjectProps) => {
  const [selected, setSelected] = useContext(SelectionContext);

  return (
    <group onPointerDown={() => setSelected(id)}>
      <group visible={selected === id}>{activeObject}</group>
      <group visible={selected !== id}>{inactiveObject}</group>
    </group>
  );
};

export default InteractiveObject;
