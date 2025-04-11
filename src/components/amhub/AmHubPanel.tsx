import { Container, Image } from "@react-three/uikit";

import Panel from "../ui/Panel";
import Slides, { Slide } from "../ui/Slides";

const slides: Slide[] = [
  { page: [0, 1, 2], label: "Chronology" },
  { page: [3], label: "AM Process" },
  { page: [4], label: "Materials" },
];

const AmHubPanel = () => (
  <Panel
    title="AM Hub"
    transformRotateY={-180}
    transformTranslateX={1048}
    transformTranslateY={-160}
    transformTranslateZ={1126}
  >
    <Slides slides={slides} count={3}>
      <Container>
        <Image height="100%" src="/vr-laboratory/image/chronology-1980.jpg" />
      </Container>
      <Container>
        <Image height="100%" src="/vr-laboratory/image/chronology-1990.jpg" />
      </Container>
      <Container>
        <Image height="100%" src="/vr-laboratory/image/chronology-2000.jpg" />
      </Container>
    </Slides>
  </Panel>
);
export default AmHubPanel;
