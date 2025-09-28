import { FontFamilyProvider, Root, RootProperties } from "@react-three/uikit";

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
    <FontFamilyProvider
      helvetica={{
        bold: "fonts/helvetica-bold-msdf.json",
        normal: "fonts/helvetica-regular-msdf.json",
      }}
    >
      {showWelcome ? (
        <Welcome
          title={title}
          subtitle={subtitle}
          cooperator={cooperator}
          onClick={onClick}
        />
      ) : (
        children
      )}
    </FontFamilyProvider>
  </Root>
);

export default Panel;
