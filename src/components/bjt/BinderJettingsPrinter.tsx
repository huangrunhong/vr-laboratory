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
        cleanPrintHead={() => playOnce('CleanPrintHead', 1)}
        printTestPatterns={() => playOnce('PrintTestPatterns', 1)}
        startPrinting={() => playOnce('Printing', 1)}
        onSelectComponent={highlightSelection(gltf, meshes)}
      />
    )}
  </Printer>
);

export default BinderJettingsPrinter;
