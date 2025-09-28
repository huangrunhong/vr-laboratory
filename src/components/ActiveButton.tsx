import { Container, Root, Text } from '@react-three/uikit';

interface ActiveButtonProps {
  positionX: number;
  positionY: number;
  positionZ: number;
  rotationY: number;
  onPointerDown: () => void;
}

const ActiveButton = ({
  positionX,
  positionY,
  positionZ,
  rotationY,
  onPointerDown,
}: ActiveButtonProps) => (
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
    hover={{ backgroundColor: '#0065bd' }}
  >
    <Container>
      <Text fontSize={5} color="#fff" fontWeight={700}>
        Explore
      </Text>
    </Container>
  </Root>
);

export default ActiveButton;
