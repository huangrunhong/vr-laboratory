import { useState } from "react";
import { Container, Image } from "@react-three/uikit";

import Panel from "../ui/Panel";
import Slides, { Slide } from "../ui/Slides";
import RoundedButton from "../ui/RoundedButton";
import Span from "../ui/Span";

const slides: Slide[] = [
  {
    page: [0],
    icon: "/vr-laboratory/bjt/00_Icon_Printer_Components.png",
    label: "Printer Components",
  },
  {
    page: [1],
    icon: "/vr-laboratory/bjt/01_Icon_Pre-processing.png",
    label: "Pre-processing",
  },
  {
    page: [2],
    icon: "/vr-laboratory/bjt/02_Icon_Printing.png",
    label: "Printing",
  },
  {
    page: [3],
    icon: "/vr-laboratory/bjt/03_Icon_Post-processing.png",
    label: "Post-processing",
  },
  {
    page: [4],
    icon: "/vr-laboratory/bjt/04_Icon_Take_Aways.png",
    label: "Take Away",
  },
];

const BinderJettingPanel = () => {
  const [component, setComponent] = useState(0);

  return (
    <Panel
      title="Binder Jetting (BJT)"
      subtitle="Welcome to the Process Area"
      cooperator="/vr-laboratory/bjt/igcv.png"
      transformRotateY={-135}
      transformTranslateX={560}
      transformTranslateY={-135}
      transformTranslateZ={10}
    >
      <Slides slides={slides} count={4}>
        <Container flexDirection="column" gap={8}>
          <Image
            src="/vr-laboratory/bjt/Slide_2_Table_Processoverview_BJT.png"
            flexGrow={1}
          />
          <Container justifyContent="space-between">
            <RoundedButton
              outline={component !== 0}
              onClick={() => setComponent(0)}
            >
              Build Platform
            </RoundedButton>
            <RoundedButton
              outline={component !== 1}
              onClick={() => setComponent(1)}
            >
              Print Head
            </RoundedButton>
            <RoundedButton
              outline={component !== 2}
              onClick={() => setComponent(2)}
            >
              Recoater
            </RoundedButton>
            <RoundedButton
              outline={component !== 3}
              onClick={() => setComponent(3)}
            >
              Cleaning Unit
            </RoundedButton>
          </Container>
          <Container width={200}>
            {component === 0 && (
              <Span>
                The Build Platform is a metal plate on which the printing is
                done and the part is built.
              </Span>
            )}
            {component === 1 && (
              <Span>
                The Print Head has several nozzles, from which the binder is
                sprayed onto the print bed, thus printing the part
                layer-by-layer.
              </Span>
            )}
            {component === 2 && (
              <Span>
                The Recoater operates in two steps; in the first step, it fills
                in the material on the print bed, and in the next step, it
                smoothens the filled material to form a layer.
              </Span>
            )}
            {component === 3 && (
              <Span>
                The Cleaning Unit consists of a cleaning roll, used to clean the
                print head to remove the residual binder and foreign substances
                on the nozzle plate at specified intervals. This helps in
                preventing the nozzles from clogging.
              </Span>
            )}
          </Container>
        </Container>
      </Slides>
    </Panel>
  );
};

export default BinderJettingPanel;
