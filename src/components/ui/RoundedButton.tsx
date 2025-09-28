import { Container, Text } from "@react-three/uikit";

import colors from "../../shared/colors";

interface RoundedButtonProps {
  children: string;
  onClick?: () => void;
  outline?: boolean;
  inverse?: boolean;
}

const RoundedButton = ({
  children,
  onClick,
  outline,
  inverse,
}: RoundedButtonProps) => (
  <Container
    paddingY={2}
    paddingX={4}
    backgroundColor={
      inverse
        ? outline
          ? colors.primary
          : colors.white
        : outline
          ? colors.white
          : colors.primary
    }
    hover={{
      backgroundColor: colors.primaryHover,
    }}
    borderColor={inverse ? colors.white : colors.primary}
    borderWidth={0.35}
    borderRadius={20}
    justifyContent="center"
    minWidth={36}
    onClick={onClick}
    cursor="pointer"
    alignSelf="flex-start"
  >
    <Text
      textAlign="center"
      fontSize={6}
      fontWeight={700}
      color={inverse || !outline ? colors.white : colors.primary}
    >
      {children}
    </Text>
  </Container>
);

export default RoundedButton;
