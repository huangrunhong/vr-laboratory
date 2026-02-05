import { Fragment, useState } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';

import usePlayOnce from '../hooks/usePlayOnce';

import CircleButton from './CircleButton';
import TutorialPanel from './tutorial/TutorialPanel';
import AirButton from './AirButton';
import LobbyBox from './LobbyBox';

const path = '/vr-laboratory/room.glb';

const Room = () => {
  const room = useGLTF(path);
  const animations = useAnimations(room.animations, room.scene);
  const playOnce = usePlayOnce(animations.actions, false);

  const [showBox, setShowBox] = useState(false);

  const appearBlueLine = () => {
    playOnce('Lobby_1', 2);
    setShowBox(true);
  };

  const openDoor = () => playOnce('Door_entrance', 2);
  const openSocialSpace = () => playOnce('Door_social_space', 2);
  const activeFraunhofer = () => playOnce('Hub_2', 2);
  const activeEos = () => playOnce('Hub_3', 2);
  const activeMicroFactory = () => playOnce('Hub_1', 2);
  const activeSnapmaker = () => playOnce('Hub_4', 2);

  return (
    <Fragment>
      <primitive object={room.scene} />
      <mesh rotation-y={Math.PI / 2}>
        <CircleButton size={0.07} position={[4.2, 1, -0.25]} onClick={openDoor} />
      </mesh>
      <mesh rotation-y={-Math.PI / 2}>
        <CircleButton size={0.07} position={[-4.2, 1, 0.35]} onClick={openDoor} />
      </mesh>
      <mesh rotation-y={Math.PI}>
        <CircleButton size={0.07} position={[-9.35, 1, -3.1]} onClick={openSocialSpace} />
      </mesh>
      <mesh rotation-y={Math.PI * 2}>
        <CircleButton size={0.07} position={[9.35, 1, 3.25]} onClick={openSocialSpace} />
      </mesh>
      {showBox && <LobbyBox />}
      <AirButton
        position={[8.048, 1.63, 9.08]}
        rotation={[0, 0.5, 0.5]}
        onClick={activeFraunhofer}
      />
      <AirButton position={[8.048, 1.63, 5.965]} rotation={[0, 0.5, 0.5]} onClick={activeEos} />
      <AirButton
        position={[12.767, 1.63, 9.067]}
        rotation={[0, -0.5, 0.5]}
        onClick={activeMicroFactory}
      />
      <AirButton
        position={[12.767, 1.63, 5.92]}
        rotation={[0, -0.5, 0.5]}
        onClick={activeSnapmaker}
      />
      <TutorialPanel onClick={appearBlueLine} />
    </Fragment>
  );
};

export default Room;
