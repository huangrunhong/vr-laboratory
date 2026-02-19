import { useState } from 'react';
import { useGLTF } from '@react-three/drei';

import SelectionContext from '../contexts/SelectionContext';
import AmHubPanel from '../components/amhub/AmHubPanel';
import BinderJettingsPrinter from '../components/bjt/BinderJettingsPrinter';
import VatPhotopolymerizationPrinter from '../components/vpp/VatPhotopolymerizationPrinter';
import PowderBedFusionPrinter from '../components/pbf/PowderBedFusionPrinter';
import MaterialExtrusionPrinter from '../components/mex/MaterialExtrusionPrinter';
import Room from '../components/Room';

const logoPath = import.meta.env.BASE_URL + '/logo.glb';

const HomePage = () => {
  const logo = useGLTF(logoPath);
  const [selected, setSelected] = useState('');

  return (
    <SelectionContext.Provider value={[selected, setSelected]}>
      <primitive object={logo.scene} />
      <Room />
      <BinderJettingsPrinter />
      <VatPhotopolymerizationPrinter />
      <PowderBedFusionPrinter />
      <VatPhotopolymerizationPrinter />
      <MaterialExtrusionPrinter />
      <AmHubPanel />
    </SelectionContext.Provider>
  );
};

export default HomePage;
