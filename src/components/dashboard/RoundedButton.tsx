import { Container, Text } from "@react-three/uikit";

interface RoundedButtonProps {
  children: string;
  backgroundColor: string;
  textColor: string;
  borderColor?: string;
  fontSize: number;
  onClick?: () => void;
}
const RoundedButton = ({
  children,
  backgroundColor,
  borderColor,
  textColor,
  fontSize,
  onClick,
}: RoundedButtonProps) => {
  return (
    <Container
      paddingY={2}
      paddingX={4}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      borderWidth={0.35}
      borderRadius={20}
      justifyContent="center"
      minWidth={40}
      onClick={onClick}
    >
      <Text
        textAlign="center"
        fontSize={fontSize}
        fontWeight={600}
        color={textColor}
      >
        {children}
      </Text>
    </Container>
  );
};

export default RoundedButton;
