import { Container, Image, Text } from "@react-three/uikit";
import Navigation from "./Navigation";
import RoundedButton from "./RoundedButton";

const ProProcessing = () => {
  return (
    <Container>
      {/* Navigation Block */}
      <Container
        borderRightWidth={0.25}
        borderBottomLeftRadius={3}
        borderTopLeftRadius={3}
        borderColor="#a1a1a1"
        backgroundColor="#e8e8e8"
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Navigation step="1" color="#0064c0">
          Pro-processing
        </Navigation>
        <Navigation step="2" color="#a1a1a1">
          Printing
        </Navigation>
        <Navigation step="3" color="#a1a1a1">
          Post-processing
        </Navigation>
        <Navigation step="4" color="#a1a1a1">
          Take Away
        </Navigation>
        <RoundedButton backgroundColor="black" textColor="white" fontSize={6}>
          Help
        </RoundedButton>
      </Container>

      <Container
        padding={6}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Container
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
        >
          <RoundedButton
            backgroundColor="white"
            textColor="#0064c0"
            borderColor="#0064c0"
            fontSize={4}
          >
            Virtual 3D Model
          </RoundedButton>
          <Container backgroundColor="#a1a1a1" height={0.5} width={3} />
          <RoundedButton
            backgroundColor="white"
            textColor="#a1a1a1"
            borderColor="#a1a1a1"
            fontSize={4}
          >
            Print Bed
          </RoundedButton>
          <Container backgroundColor="#a1a1a1" height={0.5} width={3} />
          <RoundedButton
            backgroundColor="white"
            textColor="#a1a1a1"
            borderColor="#a1a1a1"
            fontSize={4}
          >
            Print Head Setup
          </RoundedButton>
        </Container>
        <Text fontSize={6}>Choose the part geometry:</Text>
        <Container
          paddingX={12}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Image src="/vr-laboratory/airplane.png" width={50} />
          <Image src="/vr-laboratory/dinosaur.png" width={50} />
        </Container>
        <Container
          borderBottomWidth={0.5}
          width={16}
          alignSelf="flex-end"
          alignItems="center"
          justifyContent="center"
          paddingY={1}
        >
          <Text fontSize={6} textAlign="center">
            Next
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default ProProcessing;
