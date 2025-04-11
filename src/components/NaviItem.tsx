import { Container, Svg, Text } from "@react-three/uikit";
interface NaviItemProps {
  active: boolean;
  icon: string;
  label: string;
  onClick: () => void;
}
const NaviItem = ({ active, icon, label, onClick }: NaviItemProps) => {
  return (
    <Container
      alignItems="center"
      padding={4}
      gap={4}
      borderRadius={2}
      cursor="pointer"
      backgroundColor={active ? "#0779e3" : undefined}
      hover={{ backgroundColor: "#0779e3" }}
      onClick={onClick}
    >
      <Svg width={6} height={6} src={icon} color="#fff" />
      <Text fontSize={5} color="#fff" fontWeight={500}>
        {label}
      </Text>
    </Container>
  );
};

export default NaviItem;
