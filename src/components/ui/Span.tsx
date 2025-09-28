import { Text, TextProperties } from '@react-three/uikit';

import colors from '../../shared/colors';

interface SpanProps extends TextProperties {
  primary?: boolean;
}

const Span = ({ primary, ...props }: SpanProps) => (
  <Text
    color={primary ? colors.primary : colors.foreground}
    fontWeight={400}
    fontSize={7}
    {...props}
  />
);

export default Span;
