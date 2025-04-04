import { useState } from "react";
import { Root } from "@react-three/uikit";

import Welcome from "./Welcome";
import ProProcessing from "./PreProcessing";

const ControlPanel = () => {
  const [page, setPage] = useState("welcome");

  return (
    <Root
      backgroundColor={page === "welcome" ? "#0064c0" : "white"}
      borderRadius={4}
      sizeX={2.2}
      sizeY={1.2}
      transformRotateY={-150}
      transformTranslateX={530}
      transformTranslateY={-130}
      transformTranslateZ={30}
    >
      {page === "welcome" && (
        <Welcome
          button="Let's Go"
          content="BJT"
          onClick={() => setPage("pre-processing")}
        />
      )}
      {page === "pre-processing" && <ProProcessing />}
    </Root>
  );
};

export default ControlPanel;
