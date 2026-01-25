import Printer from '../Printer';
import highlightSelection from '../../helpers/highlightSelection';

import MaterialExtrusionPanel from './MaterialExtrusionPanel';

const meshes = ['BuildPlatform', 'BuildPlate', 'Extruder', 'PrinitingMaterial_01'];
console.log();

const MaterialExtrusionPrinter = () => (
  <Printer name="mex" position={[1560, -130, 56]} rotation={57 * Math.PI}>
    {({ gltf, playOnce }) => (
      <MaterialExtrusionPanel
        automaticBedLeveling={() => playOnce('Automatic Bed', 1.5)}
        filamentLoading={() => playOnce(' Filament Loading', 2)}
        preheating={() => playOnce('PreHeating', 2)}
        play={() => playOnce('Start Printing', 2)}
        displayPart={() => playOnce('Display Part', 1)}
        onSelectComponent={highlightSelection(gltf, meshes)}
      />
    )}
  </Printer>
);

export default MaterialExtrusionPrinter;
