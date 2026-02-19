import highlightSelection from '../../helpers/highlightSelection';

import Printer from '../Printer';

import BinderJettingPanel from './BinderJettingsPanel';

const meshes = ['BuildPlatform', 'PrintHead', 'Recoater', 'CleaningUnit'];

const BinderJettingsPrinter = () => (
  <Printer
    name="printer"
    initialAction="CleanPrintHead"
    position={[300, -130, 70]}
    rotation={57 * Math.PI}
  >
    {({ gltf, playOnce }) => (
      <BinderJettingPanel
        cleanPrintHead={() => playOnce('CleanPrintHead', 2)}
        printTestPatterns={() => playOnce('PrintTestPatterns', 2)}
        coatInitialLayers={() => playOnce('CoatlnitialLayers', 2)}
        startPrinting={() => playOnce('Printing', 2)}
        displayPart={() => playOnce('DisplayPart', 1)}
        onSelectComponent={highlightSelection(gltf, meshes)}
      />
    )}
  </Printer>
);

export default BinderJettingsPrinter;
