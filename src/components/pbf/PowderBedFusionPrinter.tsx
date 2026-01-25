import highlightSelection from '../../helpers/highlightSelection';
import Printer from '../Printer';

import PowderBedFusionPanel from './PowderBedFusionPanel';

const meshes = ['BuildPlatform', 'LaserScanning', 'RecoatingUnit', 'Recirculating'];

const PowderBedFusionPrinter = () => (
  <Printer name="pbf" position={[1260, -130, -770]} rotation={0}>
    {({ gltf, playOnce }) => (
      <PowderBedFusionPanel
        onSelectComponent={highlightSelection(gltf, meshes)}
        play={() => playOnce('Start Printing')}
        displayPart={() => playOnce('Display Part')}
      />
    )}
  </Printer>
);

export default PowderBedFusionPrinter;
