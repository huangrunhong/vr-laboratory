import { Root, RootProperties } from "@react-three/uikit";

import colors from "../../shared/colors";

import Welcome from "./Welcome";

interface PanelProps extends RootProperties {
  showWelcome: boolean;
  children: React.ReactNode;
  onClick: () => void;
  title: string;
  subtitle: string;
  cooperator?: string;
}

const Panel = ({
  children,
  onClick,
  showWelcome,
  title,
  subtitle,
  cooperator,
  ...rest
}: PanelProps) => (
  <Root
    backgroundColor={showWelcome ? colors.primary : colors.white}
    borderRadius={4}
    sizeX={3}
    sizeY={1.8}
    {...rest}
  >
    {showWelcome && (
      <Welcome
        title={title}
        subtitle={subtitle}
        cooperator={cooperator}
        onClick={onClick}
      />
    )}
    {!showWelcome && children}
  </Root>
);

export default Panel;
