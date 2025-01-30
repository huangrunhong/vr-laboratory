import { Root } from "@react-three/uikit";
import RoundedButton from "./dashboard/RoundedButton";

const AnimationsController = () => {
  return (
    <Root
      borderRadius={20}
      backgroundOpacity={0.8}
      backgroundColor="white"
      sizeX={1.8}
      sizeY={0.25}
      transformRotateY={180}
      transformTranslateX={282}
      transformTranslateY={-80}
      transformTranslateZ={-80}
      padding={4}
      flexDirection="row"
      justifyContent="space-between"
    >
      <RoundedButton backgroundColor="white" textColor="black" fontSize={6}>
        Step 1
      </RoundedButton>
      <RoundedButton backgroundColor="white" textColor="black" fontSize={6}>
        Step 2
      </RoundedButton>
      <RoundedButton backgroundColor="white" textColor="black" fontSize={6}>
        Step 3
      </RoundedButton>
      <RoundedButton backgroundColor="white" textColor="black" fontSize={6}>
        Step 4
      </RoundedButton>
    </Root>
  );
};

export default AnimationsController;
