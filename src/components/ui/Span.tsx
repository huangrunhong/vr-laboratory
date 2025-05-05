import { Text } from "@react-three/uikit";

import colors from "../../shared/colors";

const Span = ({ children }: { children: string }) => (
  <Text color={colors.foreground} fontWeight={400} fontSize={8} lineHeight={10}>
    {children}
  </Text>
);

export default Span;
