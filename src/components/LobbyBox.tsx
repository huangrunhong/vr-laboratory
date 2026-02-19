import { useAnimations, useGLTF } from '@react-three/drei';

import usePlayOnce from '../hooks/usePlayOnce';

import CircleButton from './CircleButton';
import AirButton from './AirButton';

const path = import.meta.env.BASE_URL + '/lobbyBox.glb';

const LobbyBox = (props: { visible: boolean }) => {
  const lobby = useGLTF(path);
  const animations = useAnimations(lobby.animations, lobby.scene);
  const playOnce = usePlayOnce(animations.actions, false);

  const openBox = () => playOnce('Lobby_2', 2);
  const activeTum = () => playOnce('Lobby_3', 2);

  return (
    <group visible={props.visible}>
      <mesh rotation={[0, -Math.PI / 2, 0]}>
        <CircleButton onClick={openBox} position={[-0.075, 1.125, 2.56]} size={0.042} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <primitive object={lobby.scene} />
      </mesh>
      <AirButton position={[-2.2815, 1.505, -0.08]} rotation={[0, -0.5, 0.5]} onClick={activeTum} />
    </group>
  );
};

export default LobbyBox;
