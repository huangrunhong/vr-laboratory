import { Container, Image, Text, Video } from "@react-three/uikit";
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
        borderColor="#505050"
        backgroundColor="#f5f5f5"
        paddingX={6}
        paddingY={10}
        flexDirection="column"
        justifyContent="space-between"
      >
        <Navigation step="1" color="#0064c0">
          Pro-processing
        </Navigation>
        <Navigation step="2" color="#505050">
          Printing
        </Navigation>
        <Navigation step="3" color="#505050">
          Post-processing
        </Navigation>
        <Navigation step="4" color="#505050">
          Take Away
        </Navigation>
        <RoundedButton backgroundColor="black" textColor="white" fontSize={6}>
          Help
        </RoundedButton>
      </Container>

      <Container
        paddingX={6}
        paddingY={10}
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
          <Container backgroundColor="#505050" height={0.5} width={8} />
          <RoundedButton
            backgroundColor="white"
            textColor="#505050"
            borderColor="#505050"
            fontSize={4}
          >
            Print Bed
          </RoundedButton>
          <Container backgroundColor="#505050" height={0.5} width={8} />
          <RoundedButton
            backgroundColor="white"
            textColor="#505050"
            borderColor="#505050"
            fontSize={4}
          >
            Print Head Setup
          </RoundedButton>
        </Container>
        <Text fontSize={6} fontWeight={500}>
          Choose the part geometry:
        </Text>
        <Container
          paddingX={12}
          flexDirection="row"
          justifyContent="space-between"
        >
          <Image src="/vr-laboratory/airplane.png" width={40} />
          <Image src="/vr-laboratory/dinosaur.png" width={40} />
          <Video src="/vr-laboratory/video.mp4" loop autoplay width={40} />
        </Container>
        <Container
          borderBottomWidth={0.5}
          width={12}
          alignSelf="flex-end"
          alignItems="center"
          justifyContent="center"
          paddingY={1}
        >
          <Text fontSize={4} textAlign="center">
            Next
          </Text>
        </Container>
      </Container>
    </Container>
  );
};

export default ProProcessing;
