import { Root, Text } from "@react-three/uikit";

const TheoryPanel = () => {
  return (
    <Root
      borderRadius={4}
      backgroundColor="white"
      sizeX={2.8}
      sizeY={1.6}
      transformRotateY={180}
      transformTranslateX={360}
      transformTranslateY={-140}
      transformTranslateZ={299}
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
