import { useState } from "react";
import { Container, Image } from "@react-three/uikit";

import Panel from "../ui/Panel";
import Slides, { Slide } from "../ui/Slides";

const slides: Slide[] = [
  {
    icon: "/vr-laboratory/amHub/icons/book-3-line.png",
    page: [1],
    label: "Definition",
  },
  {
    icon: "/vr-laboratory/amHub/icons/time-line.png",
    page: [2, 3, 4],
    label: "Chronology",
  },
  {
    abbr: "BJT",
    icon: "/vr-laboratory/amHub/icons/AM-Hub_BJT_Icon.png",
    page: [5, 6, 7],
    label: "Binder Jetting",
  },
  {
    abbr: "DED",
    icon: "/vr-laboratory/amHub/icons/AM-Hub_DED_Icon.png",
    page: [8],
    label: "Direct Energy Deposition",
  },
  {
    abbr: "MEX",
    icon: "/vr-laboratory/amHub/icons/AM-Hub_MEX_Icon.png",
    page: [9],
    label: "Material Extrusion",
  },
  {
    abbr: "MJT",
    icon: "/vr-laboratory/amHub/icons/AM-Hub_MJT_Icon.png",
    page: [10],
    label: "Material Jetting",
  },
  {
    abbr: "PBF",
    icon: "/vr-laboratory/amHub/icons/AM-Hub_PBF_Icon.png",
    page: [11],
    label: "Powder Bed Fusion",
  },
  {
    abbr: "SHL",
    icon: "/vr-laboratory/amHub/icons/AM-Hub_SHL_Icon.png",
    page: [12],
    label: "Sheet Lamination",
  },
  {
    abbr: "VPP",
    icon: "/vr-laboratory/amHub/icons/AM-Hub_VPP_Icon.png",
    page: [13],
    label: "Vat Photopolymerization",
  },

  {
    icon: "/vr-laboratory/amHub/icons/history-line.png",
    page: [14],
    label: "Future Trends",
  },
];

const AmHubPanel = () => {
  const [page, setPage] = useState(0);

  return (
    <Panel
      title="AM Hub"
      showWelcome={page === 0}
      subtitle="Welcome to the Virtual Reality Lab Additive Manufacturing"
      onClick={() => setPage(1)}
      transformRotateY={-180}
      transformTranslateX={1048}
      transformTranslateY={-160}
      transformTranslateZ={1126}
    >
      <Slides
        slides={slides}
        count={14}
        showPageNumber
        step={page}
        setStep={setPage}
      >
        <Container>
          <Image
            flexGrow={1}
            src="/vr-laboratory/amHub/images/Definition_Page_2.png"
          />
        </Container>
        <Container>
          <Image
            flexGrow={1}
            src="/vr-laboratory/amHub/images/BJT_Page_1.png"
          />
        </Container>
        <Container>
          <Image
            flexGrow={1}
            src="/vr-laboratory/amHub/images/BJT_Page_2.png"
          />
        </Container>
        <Container>
          <Image
            flexGrow={1}
            src="/vr-laboratory/amHub/images/BJT_Page_3.png"
          />
        </Container>
        <Container>
          <Image
            flexGrow={1}
            src="/vr-laboratory/amHub/images/Chronology_Page_1.png"
          />
        </Container>
        <Container>
          <Image
            flexGrow={1}
            src="/vr-laboratory/amHub/images/Chronology_Page_2.png"
          />
        </Container>
        <Container>
          <Image
            flexGrow={1}
            src="/vr-laboratory/amHub/images/Chronology_Page_3.png"
          />
        </Container>
      </Slides>
    </Panel>
  );
};

export default AmHubPanel;
