import { Container } from "@react-three/uikit";
import Panel from "../ui/Panel";
// import { Slide } from "../ui/Slides";
import { useState } from "react";

// const slides: Slide[] = [
//   {
//     page: [1],
//     icon: "/vr-laboratory/bjt/00_Icon_Printer_Components.png",
//     label: "Printer Components",
//   },
//   {
//     page: [2],
//     icon: "/vr-laboratory/bjt/01_Icon_Pre-processing.png",
//     label: "Pre-processing",
//   },
//   {
//     page: [3],
//     icon: "/vr-laboratory/bjt/02_Icon_Printing.png",
//     label: "Printing",
//   },
//   {
//     page: [4],
//     icon: "/vr-laboratory/bjt/03_Icon_Post-processing.png",
//     label: "Post-processing",
//   },
//   {
//     page: [5],
//     icon: "/vr-laboratory/bjt/04_Icon_Take_Aways.png",
//     label: "Take Away",
//   },
// ];

const VppPanel = () => {
  const [page, setPage] = useState(0);
  return (
    <Panel
      cooperator="/vr-laboratory/bjt/igcv.png"
      onClick={() => setPage(1)}
      title="Vat Photopolymerization"
      showWelcome={page === 0}
      subtitle="Welcome to the Process Area"
      transformRotateY={45}
      transformTranslateX={200}
      transformTranslateY={-135}
      transformTranslateZ={-680}
    >
      <Container></Container>
    </Panel>
  );
};

export default VppPanel;
