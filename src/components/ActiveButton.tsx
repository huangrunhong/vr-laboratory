import { Container, Text } from '@react-three/uikit';

import colors from '../shared/colors';

interface ActiveButtonProps {
  rotation: number;
  position: [number, number, number];
  onPointerDown: () => void;
}

const ActiveButton = ({ position: [x, y, z], rotation, onPointerDown }: ActiveButtonProps) => (
  <Container
    cursor="pointer"
    justifyContent="center"
    backgroundColor={colors.foregroundMuted}
    opacity={1}
    borderRadius={10}
    sizeX={0.5}
    sizeY={0.15}
    transformTranslateX={x}
    transformTranslateY={y}
    transformTranslateZ={z}
    transformRotateY={rotation}
    onPointerDown={onPointerDown}
    hover={{ backgroundColor: colors.primary }}
  >
    <Text fontSize={5} color="#fff" fontWeight={700}>
      Explore
    </Text>
  </Container>
);

export default ActiveButton;
