import { createXRStore } from '@react-three/xr';

import HomePage from './pages/HomePage';
import Scene from './components/Scene';

import './styles/app.scss';

const homeStore = createXRStore({
  hand: false,
  controller: { teleportPointer: false, rayPointer: true },
});

const origin: [number, number] = [-6, -1];
const environmentFile = import.meta.env.BASE_URL + '/outside_background.exr';

const App = () => (
  <Scene
    origin={origin}
    store={homeStore}
    environmentFile={environmentFile}
    environmentIntensity={1.0}
  >
    <HomePage />
  </Scene>
);

export default App;
