import { Container, Text } from "@react-three/uikit";
import RoundedButton from "./RoundedButton";

const Welcome = ({ onClick }: { onClick: () => void }) => {
  return (
    <Container
      flexDirection="column"
      gap={8}
      paddingX={16}
      paddingY={24}
      justifyContent="space-between"
      alignItems="center"
    >
      <Text fontSize={10} textAlign="center" color="white" fontWeight={500}>
        Welcome to use Binder Jetting 3D Sand Printer!
      </Text>
      <RoundedButton
        backgroundColor="#0064c0"
        borderColor="white"
        textColor="white"
        fontSize={6}
        onClick={onClick}
      >
        Let's Go
      </RoundedButton>
    </Container>
  );
};

export default Welcome;
