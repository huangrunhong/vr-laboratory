import { useState } from "react";
import { Container, Image } from "@react-three/uikit";

import Panel from "../ui/Panel";
import Slides, { Slide } from "../ui/Slides";

const slides: Slide[] = [
  {
    icon: "/vr-laboratory/icon/shake-hands-line.png",
    page: [1, 2, 3],
    label: "Chronology",
  },
  {
    icon: "/vr-laboratory/icon/shake-hands-line.png",
    page: [4],
    label: "AM Process",
  },
  {
    icon: "/vr-laboratory/icon/shake-hands-line.png",
    page: [5],
    label: "Materials",
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
        count={3}
        showPageNumber
        step={page}
        setStep={setPage}
      >
        <Container>
          <Image flexGrow={1} src="/vr-laboratory/image/chronology-1980.jpg" />
        </Container>
        <Container>
          <Image flexGrow={1} src="/vr-laboratory/image/chronology-1990.jpg" />
        </Container>
        <Container>
          <Image flexGrow={1} src="/vr-laboratory/image/chronology-2000.jpg" />
        </Container>
      </Slides>
    </Panel>
  );
};

export default AmHubPanel;
