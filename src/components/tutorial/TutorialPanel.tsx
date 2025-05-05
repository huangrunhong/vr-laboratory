import { Container, Image, Text } from "@react-three/uikit";

import Panel from "../ui/Panel";
import Slides, { Slide } from "../ui/Slides";
import Heading from "../ui/Heading";
import Span from "../ui/Span";

const slides: Slide[] = [
  {
    page: [0],
    icon: "/vr-laboratory/icon/shake-hands-line.png",
    label: "Welcome",
  },
  {
    page: [1],
    icon: "/vr-laboratory/icon/footprint-line.png",
    label: "Movement",
  },
  { page: [2], icon: "/vr-laboratory/icon/cursor-line.png", label: "Clicking" },
  {
    page: [3],
    icon: "/vr-laboratory/icon/search-line.png",
    label: "Inspection",
  },
];

interface TutorialPanelProps {
  onClick: () => void;
}

const TutorialPanel = ({ onClick }: TutorialPanelProps) => (
  <Panel
    title="Tutorial"
    subtitle="Welcome to the Virtual Reality Lab Additive Manufacturing"
    onStart={onClick}
    transformRotateY={-180}
    transformTranslateX={-500}
    transformTranslateY={-160}
    transformTranslateZ={315}
  >
    <Slides slides={slides} count={4}>
      <Container flexDirection="column" width={200} gap={4}>
        <Heading>Welcome to the Tutorial!</Heading>
        <Span>
          You will complete three mini-tutorials designed to help you
          familiarize yourself with the basic functions of the Virtual Reality
          environment.
        </Span>
      </Container>
      <Container flexDirection="column" width={200} gap={4}>
        <Heading>Walking around</Heading>
        <Span>
          Walk to the reception desk by following the blue line. Use the
          joysticks to navigate, as shown below.
        </Span>
        <Container gap={12} positionTop={4}>
          <Image width={120} src="/vr-laboratory/move-controls.png" />
          <Container flexDirection="column" width={55} gap={8}>
            <Container flexDirection="column" gap={2}>
              <Text fontSize={7} fontWeight={600}>
                Left Joystick
              </Text>
              <Text fontSize={7}>Move forward, backward or sideways.</Text>
            </Container>
            <Container flexDirection="column" gap={2}>
              <Text fontSize={7} fontWeight={600}>
                Right Joystick
              </Text>
              <Text fontSize={7}>Turn around.</Text>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container flexDirection="column" width={200} gap={2}>
        <Heading>Opening the door</Heading>
        <Span>
          Point at the button on the drawer and press either Trigger Control to
          open it.
        </Span>
        <Image
          width={120}
          src="/vr-laboratory/trigger-controls.png"
          positionBottom={-8}
        />
      </Container>
      <Container flexDirection="column" width={200} gap={6}>
        <Container flexDirection="column" gap={2}>
          <Heading>Activating the Model</Heading>
          <Span>
            Click the instruction button inside the drawer to activate the 3D
            model and inspect it.
          </Span>
        </Container>
        <Container flexDirection="column" gap={2}>
          <Heading>Deactivating the Model</Heading>
          <Span>
            Click the instruction button again, then close the drawer by
            pressing the button outside the drawer.
          </Span>
        </Container>
        <Image
          width={120}
          src="/vr-laboratory/trigger-controls.png"
          positionBottom={-8}
        />
      </Container>
    </Slides>
  </Panel>
);

export default TutorialPanel;
