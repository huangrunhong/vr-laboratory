import { Root, RootProperties } from "@react-three/uikit";
import React, { useState } from "react";

import colors from "../../shared/colors";

import Welcome from "./Welcome";

interface PanelProps extends RootProperties {
  children: React.ReactNode;
  onStart?: () => void;
  title: string;
}

const Panel = ({
  children,
  onStart = () => {},
  title,
  ...rest
}: PanelProps) => {
  const [start, setStart] = useState(true);

  return (
    <Root
      backgroundColor={start ? colors.primary : colors.white}
      borderRadius={4}
      sizeX={3}
      sizeY={1.8}
      {...rest}
    >
      {start && (
        <Welcome title={title} onClick={() => (onStart(), setStart(false))} />
      )}
      {!start && children}
    </Root>
  );
};

export default Panel;
