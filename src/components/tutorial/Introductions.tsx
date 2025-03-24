import { Container, Image, Svg, Text } from "@react-three/uikit";
import { Children } from "react";

interface TutorialProps {
  active: boolean;
  icon: string;
  label: string;
  onClick: () => void;
}

const Tutorial = ({ active, icon, label, onClick }: TutorialProps) => (
  <Container
    alignItems="center"
    padding={4}
    gap={4}
    borderRadius={2}
    cursor="pointer"
    backgroundColor={active ? "#0779e3" : undefined}
    hover={{ backgroundColor: "#0779e3" }}
    onClick={onClick}
  >
    <Svg width={6} height={6} src={icon} color="#fff" />
    <Text fontSize={5} color="#fff" fontWeight={500}>
      {label}
    </Text>
  </Container>
);

interface StepContainerProps {
  children: React.ReactNode;
  step: number;
  setStep: (step: number) => void;
}

const StepContainer = ({ children, step, setStep }: StepContainerProps) => (
  <Container
    width={170}
    height="100%"
    padding={6}
    flexDirection="column"
    justifyContent="space-between"
    backgroundColor="#fff"
    borderRadius={2}
  >
    {Children.map(children, (child, index) => (step === index ? child : null))}
    <Container gap={6} alignSelf="flex-end">
      <Svg
        width={10}
        color="#374151"
        src="/vr-laboratory/svg/arrow-left-circle-line.svg"
        cursor="pointer"
        hover={{ color: "#0064c0" }}
        onClick={() => setStep(Math.max(0, step - 1))}
      />
      <Svg
        width={10}
        color="#374151"
        src="/vr-laboratory/svg/arrow-right-circle-line.svg"
        cursor="pointer"
        hover={{ color: "#0064c0" }}
        onClick={() => setStep((step + 1) % 5)}
      />
    </Container>
  </Container>
);

const Span = ({ children }: { children: string }) => (
  <Text color="#374151" fontWeight={400} fontSize={5} lineHeight={6}>
    {children}
  </Text>
);

const Heading = ({ children }: { children: string }) => (
  <Text color="#374151" fontWeight={700} fontSize={5} lineHeight={6}>
    {children}
  </Text>
);

interface IntroductionsProps {
  step: number;
  setStep: (step: number) => void;
}

const Introductions = ({ step, setStep }: IntroductionsProps) => (
  <Container
    width="100%"
    height="100%"
    gap={4}
    padding={4}
    backgroundColor="#0064c0"
    borderRadius={4}
  >
    <Container flexDirection="column" gap={1}>
      <Tutorial
        active={step === 2}
        label="Movement"
        icon="/vr-laboratory/svg/footprint-line.svg"
        onClick={() => setStep(2)}
      />
      <Tutorial
        active={step === 3}
        label="Clicking"
        icon="/vr-laboratory/svg/gamepad-line.svg"
        onClick={() => setStep(3)}
      />
      <Tutorial
        active={step === 4 || step === 5}
        label="Inspection"
        icon="/vr-laboratory/svg/search-line.svg"
        onClick={() => setStep(4)}
      />
    </Container>
    <StepContainer step={step} setStep={setStep}>
      <Container flexDirection="column" gap={4}>
        <Heading>Welcome to the Tutorial!</Heading>
        <Span>
          You will complete three mini-tutorials designed to help you
          familiarize yourself with the basic functions of the Virtual Reality
          environment.
        </Span>
      </Container>
      <Container flexDirection="column" gap={4}>
        <Heading>Walking around</Heading>
        <Span>
          Walk to the reception desk by following the blue line. Use the
          joysticks to navigate, as shown below.
        </Span>
        <Container gap={6} positionTop={4}>
          <Image width={90} src="/vr-laboratory/move-controls.png" />
          <Container flexDirection="column" width={55} gap={6}>
            <Container flexDirection="column" gap={2}>
              <Heading>Left Joystick</Heading>
              <Span>Move forward, backward or sideways.</Span>
            </Container>
            <Container flexDirection="column" gap={2}>
              <Heading>Right Joystick</Heading>
              <Span>Turn around.</Span>
            </Container>
          </Container>
        </Container>
      </Container>
      <Container flexDirection="column" gap={2}>
        <Heading>Opening the door</Heading>
        <Span>
          Point at the button on the drawer and press either Trigger Control to
          open it.
        </Span>
        <Image
          width={90}
          src="/vr-laboratory/trigger-controls.png"
          positionBottom={-8}
        />
      </Container>
      <Container flexDirection="column" gap={2}>
        <Heading>Activating the Model</Heading>
        <Span>
          Click the instruction button inside the drawer to activate the 3D
          model and inspect it.
        </Span>
        <Image
          width={90}
          src="/vr-laboratory/trigger-controls.png"
          positionBottom={-8}
        />
      </Container>
      <Container flexDirection="column" gap={2}>
        <Heading>Deactivating the Model</Heading>
        <Span>
          Click the instruction button again, then close the drawer by pressing
          the button outside the drawer.
        </Span>
        <Image
          width={90}
          src="/vr-laboratory/trigger-controls.png"
          positionBottom={-8}
        />
      </Container>
    </StepContainer>
  </Container>
);

export default Introductions;
