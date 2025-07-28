import { Container, Text, Image } from "@react-three/uikit";

import RoundedButton from "./RoundedButton";

interface WelcomeProps {
  title: string;
  subtitle: string;
  cooperator?: string;
  onClick: () => void;
}

const Welcome = ({ onClick, title, subtitle, cooperator }: WelcomeProps) => (
  <Container
    flexDirection="column"
    gap={4}
    padding={20}
    alignItems="flex-start"
    width="100%"
  >
    <Container flexDirection="column" gap={4} flexGrow={1}>
      <Text fontSize={8} color="white" fontWeight={400}>
        {subtitle}
      </Text>
      <Text fontSize={16} color="white" fontWeight={500}>
        {title}
      </Text>
    </Container>
    <Container width="100%" flexDirection="row" alignItems="center">
      <Container flexGrow={1} gap={6}>
        <Container>
          <Text fontSize={8} color="white" fontWeight={600}>
            TUM
          </Text>
          <Text fontSize={8} color="white" fontWeight={400}>
            .Additive
          </Text>
        </Container>
        {cooperator && (
          <Text fontSize={4} color="white">
            in cooperation with
          </Text>
        )}
        {cooperator && <Image src={cooperator} width={50} />}
      </Container>
      <RoundedButton outline inverse onClick={onClick}>
        Start
      </RoundedButton>
    </Container>
  </Container>
);

export default Welcome;
