import { createXRStore } from "@react-three/xr";

import HomePage from "./pages/HomePage";
import Scene from "./components/Scene";

import "./styles/app.scss";

const homeStore = createXRStore({
  hand: false,
  controller: { teleportPointer: false, rayPointer: true },
});

const App = () => (
  <Scene
    store={homeStore}
    origin={[-6, -1]}
    environmentFile="/vr-laboratory/outside_background.exr"
    backgroundFile="/vr-laboratory/outside_background.exr"
    environmentIntensity={1}
    backgroundIntensity={0}
  >
    <HomePage />
  </Scene>
);

export default App;
