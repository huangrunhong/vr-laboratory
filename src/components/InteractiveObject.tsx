import { useContext, useState } from "react";
import SelectionContext from "../contexts/SelectionContext";
import { Select } from "@react-three/postprocessing";

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
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <Select enabled={hovered}>
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onPointerDown={() => setSelected(id)}
        >
          {selected === id ? activeObject : inactiveObject}
        </group>
      </Select>
    </>
  );
};

export default InteractiveObject;
