import { Root } from "@react-three/uikit";
import { useState } from "react";

import Welcome from "../dashboard/Welcome";

import Introductions from "./Introductions";

interface TutorialPanelProps {
  onClick: () => void;
}

const TutorialPanel = (onClick: TutorialPanelProps) => {
  const [page, setPage] = useState(0);

  return (
    <Root
      backgroundColor={page === 0 ? "#0064c0" : "white"}
      borderRadius={4}
      sizeX={2.2}
      sizeY={1.2}
      transformRotateY={-180}
      transformTranslateX={-500}
      transformTranslateY={-160}
      transformTranslateZ={315}
    >
      {page === 0 && (
        <Welcome
          content="Tutorial"
          button="Start"
          onClick={() => {
            setPage(1);
            onClick;
          }}
        />
      )}
      {page > 0 && <Introductions step={page} setStep={setPage} />}
    </Root>
  );
};

export default TutorialPanel;
