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
        backgroundColor="#e8e8e8"
        alignItems="center"
        justifyContent="center"
      >
        <Text textAlign="center" fontSize={4} fontWeight={600} color={color}>
          {step}
        </Text>
      </Container>
      <Text fontSize={6} color={color}>
        {children}
      </Text>
    </Container>
  );
};

export default Navigation;
