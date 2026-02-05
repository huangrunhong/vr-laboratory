import { Fragment } from 'react';

import playBack from '../../helpers/playBack';
import highlightSelection from '../../helpers/highlightSelection';
import CircleButton from '../CircleButton';
import Printer from '../Printer';

import BinderJettingPanel from './BinderJettingsPanel';

const meshes = ['BuildPlatform', 'PrintHead', 'Recoater', 'CleaningUnit'];

const BinderJettingsPrinter = () => (
  <Printer name="printer" position={[300, -130, 70]} rotation={57 * Math.PI}>
    {({ animations, gltf, playOnce }) => (
      <Fragment>
        <mesh rotation-y={Math.PI}>
          <CircleButton
            position={[-2.9, 1.25, -0.915]}
            onClick={() => playBack(animations.actions['DoorOpen'])}
          />
        </mesh>
        <BinderJettingPanel
          cleanPrintHead={() => playOnce('CleanPrintHead', 2)}
          printTestPatterns={() => playOnce('PrintTestPatterns', 2)}
          coatInitialLayers={() => playOnce('CoatlnitialLayers', 2)}
          startPrinting={() => playOnce('Printing', 2)}
          displayPart={() => playOnce('DisplayPart', 1)}
          onSelectComponent={highlightSelection(gltf, meshes)}
        />
      </Fragment>
    )}
  </Printer>
);

export default BinderJettingsPrinter;
