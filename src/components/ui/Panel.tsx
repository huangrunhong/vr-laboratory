import { Container, ContainerProperties } from '@react-three/uikit';

import colors from '../../shared/colors';

import Welcome from './Welcome';

const fontFamilies = {
  helvetica: {
    bold: 'fonts/helvetica-bold-msdf.json',
    normal: 'fonts/helvetica-regular-msdf.json',
  },
};

interface PanelProps extends ContainerProperties {
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
  <Container
    fontFamilies={fontFamilies}
    backgroundColor={showWelcome ? colors.primary : colors.white}
    borderRadius={4}
    sizeX={3}
    sizeY={1.8}
    {...rest}
  >
    {showWelcome ? (
      <Welcome title={title} subtitle={subtitle} cooperator={cooperator} onClick={onClick} />
    ) : (
      children
    )}
  </Container>
);

export default Panel;
