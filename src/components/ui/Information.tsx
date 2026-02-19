import { Container, ContainerProperties } from '@react-three/uikit';
import { useState } from 'react';

import colors from '../../shared/colors';

import Image from './Image';

const Information = (props: ContainerProperties) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <Image
        src="/bjt/information-line.png"
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
          borderColor={colors.black}
          borderWidth={0.5}
          borderRadius={8}
          zIndex={100}
          {...props}
        />
      )}
    </>
  );
};

export default Information;
