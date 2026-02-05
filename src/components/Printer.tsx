import { Fragment, useContext } from 'react';
import { GLTF } from 'three-stdlib';
import { ObjectMap } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';

import SelectionContext from '../contexts/SelectionContext';

import ActiveButton from './ActiveButton';
import usePlayOnce from '../hooks/usePlayOnce';

interface Printer {
  gltf: GLTF & ObjectMap;
  playOnce: ReturnType<typeof usePlayOnce>;
  animations: ReturnType<typeof useAnimations>;
}

interface PrinterProps {
  name: string;
  rotation: number;
  position: [number, number, number];
  children: (printer: Printer) => React.ReactNode;
}

const Printer = ({ children, name, position, rotation }: PrinterProps) => {
  const gltf = useGLTF(`/vr-laboratory/${name}.glb`);
  const skin = useGLTF(`/vr-laboratory/${name}Skin.glb`);
  const animations = useAnimations(gltf.animations, gltf.scene);
  const playOnce = usePlayOnce(animations.actions);
  const [selected, setSelected] = useContext(SelectionContext);

  return (
    <Fragment>
      <group position={[0, 0.00001, 0]}>
        <group visible={selected === name}>
          <primitive object={gltf.scene} />
          {children({ animations, playOnce, gltf })}
        </group>
        <group visible={selected !== name}>
          <ActiveButton
            position={position}
            rotation={rotation}
            onPointerDown={() => setSelected(name)}
          />
          <primitive object={skin.scene} />
        </group>
      </group>
    </Fragment>
  );
};

export default Printer;
