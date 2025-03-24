import { Container, Svg, Text } from "@react-three/uikit";

interface NavigatorProps {
  icon: string;
  text: string;
}

const Navigator = ({ icon, text }: NavigatorProps) => {
  return (
    <Container backgroundColor="white">
      <Svg src={icon} width={50} color="#505050" />
      <Text color="#505050" fontSize={10}>
        {text}
      </Text>
    </Container>
  );
};

export default Navigator;
