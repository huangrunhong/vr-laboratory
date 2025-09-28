import { useEffect, useState } from "react";
import { Container, Image } from "@react-three/uikit";

import Panel from "../ui/Panel";
import Slides, { Slide } from "../ui/Slides";
import RoundedButton from "../ui/RoundedButton";
import Span from "../ui/Span";
import Heading from "../ui/Heading";
import Information from "../ui/Information";

const slides: Slide[] = [
  {
    page: [1],
    icon: "/vr-laboratory/bjt/00_Icon_Printer_Components.png",
    label: "Printer Components",
  },
  {
    page: [2],
    icon: "/vr-laboratory/bjt/01_Icon_Pre-processing.png",
    label: "Pre-processing",
  },
  {
    page: [3],
    icon: "/vr-laboratory/bjt/02_Icon_Printing.png",
    label: "Printing",
  },
  {
    page: [4],
    icon: "/vr-laboratory/bjt/03_Icon_Post-processing.png",
    label: "Post-processing",
  },
  {
    page: [5],
    icon: "/vr-laboratory/bjt/04_Icon_Take_Aways.png",
    label: "Takeaways",
  },
];

interface BinderJettingPanelProps {
  cleanPrintHead: () => void;
  printTestPatterns: () => void;
  coatInitialLayers: () => void;
  startPrinting: () => void;
  displayPart: () => void;
  onSelectComponent: (index: number) => void;
}

const BinderJettingPanel = ({
  cleanPrintHead,
  printTestPatterns,
  coatInitialLayers,
  startPrinting,
  displayPart,
  onSelectComponent,
}: BinderJettingPanelProps) => {
  const [page, setPage] = useState(0);
  const [component, setComponent] = useState<number>();

  useEffect(() => {
    setComponent(undefined);
    onSelectComponent(-1);
  }, [page]);

  return (
    <Panel
      cooperator="/vr-laboratory/bjt/igcv.png"
      onClick={() => setPage(1)}
      title="Binder Jetting"
      showWelcome={page === 0}
      subtitle="Welcome to the Pre-processing Dashboard"
      transformRotateY={-135}
      transformTranslateX={560}
      transformTranslateY={-135}
      transformTranslateZ={10}
    >
      <Slides slides={slides} count={4} step={page} setStep={setPage}>
        <Container flexDirection="column" gap={8}>
          <Image
            width={100}
            src="/vr-laboratory/bjt/Slide_2_Table_Processoverview_BJT.png"
          />
          <Span fontWeight={700}>
            Click on the buttons below to locate the respective parts inside the
            printer!
          </Span>
          <Container justifyContent="space-between">
            <RoundedButton
              outline={component === 0}
              onClick={() => (setComponent(0), onSelectComponent(0))}
            >
              Build Platform
            </RoundedButton>
            <RoundedButton
              outline={component === 1}
              onClick={() => (setComponent(1), onSelectComponent(1))}
            >
              Print Head
            </RoundedButton>
            <RoundedButton
              outline={component === 2}
              onClick={() => (setComponent(2), onSelectComponent(2))}
            >
              Recoater
            </RoundedButton>
            <RoundedButton
              outline={component === 3}
              onClick={() => (setComponent(3), onSelectComponent(3))}
            >
              Cleaning Unit
            </RoundedButton>
          </Container>
          <Container>
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
        <Container flexDirection="column" gap={8}>
          <Image
            src="/vr-laboratory/bjt/Slide_7_Table_Pre-processing_Parameters_New.png"
            flexGrow={1}
          />
          <Container flexDirection="column" gap={4} alignItems="flex-start">
            <Span fontWeight={700}>
              Clean the Print Head before you start printing!
            </Span>
            <RoundedButton onClick={() => cleanPrintHead()}>
              Clean Print Head
            </RoundedButton>
          </Container>
          <Container flexDirection="column" gap={4} alignItems="flex-start">
            <Span fontWeight={700}>
              Print the Test Patterns, to ensure the Print Head is cleaned and
              all the nozzles are working!
            </Span>
            <Container
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-start"
              gap={12}
            >
              <RoundedButton onClick={() => printTestPatterns()}>
                Print Test Patterns
              </RoundedButton>
              <Image src="/vr-laboratory/bjt/Slide_7_BJT_Test_Patterns.png" />
            </Container>
          </Container>
          <Information
            flexDirection="column"
            height={146}
            positionTop={-2}
            alignSelf="flex-end"
          >
            <Heading>Importance of Print Head cleaning:</Heading>
            <Span paddingTop={4} paddingBottom={8}>
              Print Head cleaning helps to keep the nozzles in the print head
              open. The nozzle plate always has some residual binder sticking on
              the surface of the nozzle plate, and while printing, the sand
              particles can stick to the residual binder and damage the nozzle
              plate. This could lead to uneven binder spray for consecutive
              layers.
            </Span>
            <Heading>Frequency of Print Head cleaning:</Heading>
            <Span paddingY={4}>
              It is also very important to note that Print Head cleaning needs
              to be done as frequently as possible. It is a compulsion to do it
              once before printing. Most printers have the program set up so
              that the Print Head gets cleaned at certain intervals of layers.
            </Span>
          </Information>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Span>
            To create an interface between the build platform and the part, few
            layers need to be coated without any part printing on it.
          </Span>
          <Container flexDirection="column" gap={4} alignItems="flex-start">
            <Span fontWeight={700}>Coat Initial Layers! </Span>
            <RoundedButton onClick={() => coatInitialLayers()}>
              Coat Initial Layers
            </RoundedButton>
          </Container>
          <Container flexDirection="column" gap={4} alignItems="flex-start">
            <Span fontWeight={700}>
              Start Printing and observe the layer-by-layer build-up of the
              part!
            </Span>
            <RoundedButton onClick={() => startPrinting()}>
              Start Printing
            </RoundedButton>
          </Container>
          <Span color="#C00000" marginTop={34}>
            Note: The printing process is compacted to avoid extended exposure
            to the VR environment.
          </Span>
        </Container>
        <Container flexDirection="column" gap={8} positionType="relative">
          <Span>
            Printing is followed by multiple Post-processing steps. These steps
            help extract the part from the print bed.
          </Span>
          <Image src="/vr-laboratory/bjt/Slide_10_Postprocessing.png" />
          <Container marginBottom={4} justifyContent="space-between">
            <Span color="#C00000" marginTop={0}>
              Note: To see the detailed steps, check out the Post-processing
              Dashboard.
            </Span>
            <Information flexDirection="column" height={138} positionTop={-142}>
              <Span paddingY={4}>
                After printing, you cannot see the part yet; the build platform
                has a print bed with the part in it.
              </Span>
              <Span paddingY={4}>
                The first step is to remove the Print Bed from the Build
                Platform.
              </Span>
              <Span paddingY={4}>
                The sand bed is kept in a microwave oven for curing. Heating the
                part helps the binder to cure and bond the sand particles
                firmly. If not cured, the binder is not in action yet, and the
                part will crumble.
              </Span>
              <Span paddingY={4}>
                Hence, this step is crucial to make the part handleable for
                further processing or usage.
              </Span>
              <Span paddingY={4}>
                The loose powder crumbles upon curing, and you can see the part.
                A brush can clear the powder particles and reveal the printed
                part.
              </Span>
            </Information>
          </Container>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Image
            src="/vr-laboratory/bjt/Slide_2_Table_Processoverview_BJT.png"
            flexGrow={1}
          />
          <Container
            flexDirection="row"
            gap={4}
            alignItems="flex-end"
            marginBottom={18}
            justifyContent="space-between"
          >
            <RoundedButton
              outline={component === 1}
              onClick={() => displayPart()}
            >
              Display Part
            </RoundedButton>
            <Image src="/vr-laboratory/bjt/Slide_12_Table_BJT_Takeaways.png" />
          </Container>
          <Information
            flexDirection="column"
            gap={8}
            height={140}
            positionTop={-2}
          >
            <Image src="/vr-laboratory/bjt/Slide_13_AM_studio_Table.png" />
            <Container flexDirection="column" gap={2}>
              <Span>Congratulations!</Span>
              <Span>
                You have successfully completed the Process Area. Now go to the
                Post-processing Dashboard to have a detailed overview of the
                Post-processing steps.
              </Span>
            </Container>
          </Information>
        </Container>
      </Slides>
    </Panel>
  );
};

export default BinderJettingPanel;
