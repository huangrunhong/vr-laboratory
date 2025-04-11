import { Text } from "@react-three/uikit";

import colors from "../../shared/colors";

const Heading = ({ children }: { children: string }) => (
  <Text color={colors.foreground} fontWeight={700} fontSize={9} lineHeight={10}>
    {children}
  </Text>
);

export default Heading;
