import { Root, Text } from "@react-three/uikit";

const TheoryPanel = () => {
  return (
    <Root
      borderRadius={4}
      backgroundColor="white"
      sizeX={1.6}
      sizeY={1}
      transformRotateY={120}
      transformTranslateX={100}
      transformTranslateY={-130}
      transformTranslateZ={-120}
      padding={4}
      flexDirection="row"
      justifyContent="center"
    >
      <Text fontSize={8} fontWeight="bold" color="black">
        Theory
      </Text>
    </Root>
  );
};

export default TheoryPanel;
