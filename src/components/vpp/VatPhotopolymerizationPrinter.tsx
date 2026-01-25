import highlightSelection from '../../helpers/highlightSelection';
import Printer from '../Printer';

import VatPhotopolymerizationPanel from './VatPhotopolymerizationPanel';

const meshes = ['PrintingResin', 'BuildPlatform', 'OpticsUnit', 'SolventCleaner001', 'CuringUnit'];

const VatPhotopolymerizationPrinter = () => (
  <Printer name="vpp" position={[415, -130, -786]} rotation={0}>
    {({ gltf, playOnce }) => (
      <VatPhotopolymerizationPanel
        play={() => playOnce('Play', 2)}
        displayPart={() => playOnce('DisplayPart', 1)}
        onSelectComponent={highlightSelection(gltf, meshes)}
      />
    )}
  </Printer>
);

export default VatPhotopolymerizationPrinter;
