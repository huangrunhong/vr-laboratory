import { Container, Text } from "@react-three/uikit";

interface NavigationProps {
  children: string;
  step: string;
  color: string;
}

const Navigation = ({ children, step, color }: NavigationProps) => {
  return (
    <Container flexDirection="row" alignItems="center" gap={2}>
      <Container
        width={6}
        height={6}
        borderColor={color}
        borderRadius={15}
        borderWidth={0.35}
        backgroundColor="#f0f0f0"
        alignItems="center"
        justifyContent="center"
      >
        <Text textAlign="center" fontSize={4} fontWeight={600} color={color}>
          {step}
        </Text>
      </Container>
      <Text fontSize={4} color={color} fontWeight={500}>
        {children}
      </Text>
    </Container>
  );
};

export default Navigation;
