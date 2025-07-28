import { useState } from "react";
import { Container } from "@react-three/uikit";
import Panel from "../ui/Panel";
import Slides, { Slide } from "../ui/Slides";

const slides: Slide[] = [
  {
    page: [1],
    icon: "/vr-laboratory/bjt/00_Icon_Printer_Components.png",
    label: "Printer Components",
  },
  {
    page: [2],
    icon: "/vr-laboratory/bjt/01_Icon_Pre-processing.png",
    label: "Pre-processing",
  },
  {
    page: [3],
    icon: "/vr-laboratory/bjt/02_Icon_Printing.png",
    label: "Printing",
  },
  {
    page: [4],
    icon: "/vr-laboratory/bjt/03_Icon_Post-processing.png",
    label: "Post-processing",
  },
  {
    page: [5],
    icon: "/vr-laboratory/bjt/04_Icon_Take_Aways.png",
    label: "Take Away",
  },
];

const PowderBedFusionPanel = () => {
  const [page, setPage] = useState(0);

  return (
    <Panel
      cooperator="/vr-laboratory/pbf/Slide_1_EOS_logo_white.png"
      onClick={() => setPage(1)}
      title="Powder Bed Fusion"
      showWelcome={page === 0}
      subtitle="Welcome to the Process Area"
      transformRotateY={45}
      transformTranslateX={800}
      transformTranslateY={-124}
      transformTranslateZ={-662.05}
    >
      <Slides slides={slides} count={5} step={page} setStep={setPage}>
        <Container></Container>
      </Slides>
    </Panel>
  );
};

export default PowderBedFusionPanel;
