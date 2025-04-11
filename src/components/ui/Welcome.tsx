import { Container, Text } from "@react-three/uikit";

import RoundedButton from "../RoundedButton";

interface WelcomeProps {
  title: string;
  onClick: () => void;
}

const Welcome = ({ onClick, title }: WelcomeProps) => (
  <Container
    flexDirection="column"
    gap={4}
    padding={16}
    alignItems="flex-start"
    width="100%"
  >
    <Container flexDirection="column" gap={4} flexGrow={1}>
      <Text fontSize={6} color="white" fontWeight={400}>
        Welcome to the Virtual Reality Lab Additive Manufacturing
      </Text>
      <Text fontSize={14} color="white" fontWeight={500}>
        {title}
      </Text>
    </Container>
    <Container width="100%">
      <Container flexGrow={1}>
        <Text fontSize={6} color="white" fontWeight={600}>
          TUM
        </Text>
        <Text fontSize={6} color="white" fontWeight={400}>
          .Additive
        </Text>
      </Container>
      <RoundedButton
        backgroundColor="#0064c0"
        borderColor="white"
        textColor="white"
        fontSize={6}
        onClick={onClick}
      >
        Start
      </RoundedButton>
    </Container>
  </Container>
);

export default Welcome;
