import { Container, ContainerProperties, Image } from "@react-three/uikit";
import { useState } from "react";

import colors from "../../shared/colors";

const Information = (props: ContainerProperties) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Image
        src="/vr-laboratory/bjt/information-line.png"
        width={12}
        cursor="pointer"
        onClick={() => setActive(!active)}
        hover={{ opacity: 0.5 }}
        alignSelf="flex-end"
      />
      {active && (
        <Container
          width="100%"
          height="100%"
          positionTop={-4}
          positionLeft={0}
          positionType="absolute"
          padding={8}
          backgroundColor={colors.white}
          backgroundOpacity={1}
          borderColor={colors.black}
          borderWidth={0.5}
          borderRadius={8}
          zIndexOffset={1}
          {...props}
        />
      )}
    </>
  );
};

export default Information;
