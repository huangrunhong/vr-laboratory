import { Root } from "@react-three/uikit";
import { useState } from "react";

import Welcome from "../dashboard/Welcome";

import Introductions from "./Introductions";

interface TutorialPanelProps {
  onClick: () => void;
}

const TutorialPanel = ({ onClick }: TutorialPanelProps) => {
  const [start, setStart] = useState(true);

  return (
    <Root
      backgroundColor={start ? "#0064c0" : "white"}
      borderRadius={4}
      sizeX={2.2}
      sizeY={1.2}
      transformRotateY={-180}
      transformTranslateX={-500}
      transformTranslateY={-160}
      transformTranslateZ={315}
    >
      {start && (
        <Welcome
          content="Tutorial"
          button="Start"
          onClick={() => {
            onClick();
            setStart(false);
          }}
        />
      )}
      {!start && <Introductions />}
    </Root>
  );
};

export default TutorialPanel;
