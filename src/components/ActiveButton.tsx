import { Container, Root, Text } from "@react-three/uikit";
import colors from "../shared/colors";

interface ActiveButtonProps {
  positionX: number;
  positionY: number;
  positionZ: number;
  rotationY: number;
  machineName: string;
  onPointerDown: () => void;
}

const ActiveButton = ({
  positionX,
  positionY,
  positionZ,
  rotationY,
  machineName,
  onPointerDown,
}: ActiveButtonProps) => {
  return (
    <Root
      backgroundColor="#6b7280"
      borderRadius={10}
      sizeX={0.5}
      sizeY={0.15}
      transformTranslateX={positionX}
      transformTranslateY={positionY}
      transformTranslateZ={positionZ}
      transformRotateY={rotationY}
      justifyContent="center"
      onPointerDown={onPointerDown}
      cursor="pointer"
      hover={{ backgroundColor: colors.primaryHover }}
    >
      <Container>
        <Text fontSize={5} color="#fff" fontWeight={700}>
          explore {machineName}
        </Text>
      </Container>
    </Root>
  );
};

export default ActiveButton;
