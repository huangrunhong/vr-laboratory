import { useState } from "react";
import { Container, Image, Text } from "@react-three/uikit";

import Panel from "../ui/Panel";
import Slides, { Slide } from "../ui/Slides";
import Heading from "../ui/Heading";
import Span from "../ui/Span";

const slides: Slide[] = [
  {
    page: [1],
    icon: "/vr-laboratory/icon/shake-hands-line.png",
    label: "Welcome",
  },
  {
    page: [2],
    icon: "/vr-laboratory/icon/footprint-line.png",
    label: "Movement",
  },
  { page: [3], icon: "/vr-laboratory/icon/cursor-line.png", label: "Clicking" },
  {
    page: [4],
    icon: "/vr-laboratory/icon/search-line.png",
    label: "Inspection",
  },
];

interface TutorialPanelProps {
  onClick: () => void;
}

const TutorialPanel = ({ onClick }: TutorialPanelProps) => {
  const [page, setPage] = useState(0);

  return (
    <Panel
      title="Tutorial"
      showWelcome={page === 0}
      subtitle="Welcome to the Virtual Reality Lab Additive Manufacturing"
      onClick={() => (setPage(1), onClick())}
      transformRotateY={-180}
      transformTranslateX={-500}
      transformTranslateY={-160}
      transformTranslateZ={315}
    >
      <Slides slides={slides} count={4} step={page} setStep={setPage}>
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
          <Container>
            <Container
              flexGrow={1}
              flexShrink={0}
              flexBasis={0}
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Text fontSize={7} fontWeight={600}>
                Left Joystick
              </Text>
              <Text fontSize={7} textAlign="center">
                Move forward, backward or sideways.
              </Text>
            </Container>
            <Container
              flexGrow={1}
              flexShrink={0}
              flexBasis={0}
              flexDirection="column"
              alignItems="center"
              gap={2}
            >
              <Text fontSize={7} fontWeight={600}>
                Right Joystick
              </Text>
              <Text fontSize={7}>Turn around.</Text>
            </Container>
          </Container>
          <Image
            alignSelf="center"
            width={120}
            src="/vr-laboratory/move-controls.png"
          />
        </Container>
        <Container flexDirection="column" width={200} gap={2}>
          <Heading>Opening the door</Heading>
          <Span>
            Point at the button on the drawer and press either Trigger Control
            to open it.
          </Span>
          <Image
            marginTop={8}
            alignSelf="center"
            width={120}
            src="/vr-laboratory/trigger-controls.png"
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
          <Image width={120} src="/vr-laboratory/trigger-controls.png" />
        </Container>
      </Slides>
    </Panel>
  );
};

export default TutorialPanel;
