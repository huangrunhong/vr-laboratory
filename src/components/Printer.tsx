import { Fragment, useContext, useEffect } from 'react';
import { GLTF } from 'three-stdlib';
import { ObjectMap } from '@react-three/fiber';
import { useAnimations, useGLTF } from '@react-three/drei';

import SelectionContext from '../contexts/SelectionContext';

import ActiveButton from './ActiveButton';
import usePlayOnce from '../hooks/usePlayOnce';

interface PrinterObject {
  gltf: GLTF & ObjectMap;
  playOnce: ReturnType<typeof usePlayOnce>;
  animations: ReturnType<typeof useAnimations>;
}

interface PrinterProps {
  name: string;
  rotation: number;
  position: [number, number, number];
  initialAction?: string;
  children: (printer: PrinterObject) => React.ReactNode;
}

const Printer = ({ children, name, initialAction = '', position, rotation }: PrinterProps) => {
  const gltf = useGLTF(`${import.meta.env.BASE_URL}/${name}.glb`);
  const skin = useGLTF(`${import.meta.env.BASE_URL}/${name}Skin.glb`);
  const animations = useAnimations(gltf.animations, gltf.scene);
  const playOnce = usePlayOnce(animations.actions);
  const [selected, setSelected] = useContext(SelectionContext);

  useEffect(() => {
    const action = animations.actions[initialAction];

    if (!action) {
      return;
    }

    action.play().paused = true;
  }, [animations.actions, initialAction]);

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
