import { Select } from "@react-three/postprocessing";
import { useState } from "react";

interface SelectableProps {
  children: React.ReactNode;
}

const Selectable = ({ children }: SelectableProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Select enabled={hovered}>
      <group
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {children}
      </group>
    </Select>
  );
};

export default Selectable;
