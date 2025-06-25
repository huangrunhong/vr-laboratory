import { Container, Image } from "@react-three/uikit";
import Panel from "../ui/Panel";

import { useEffect, useState } from "react";
import Slides, { Slide } from "../ui/Slides";
import Span from "../ui/Span";
import RoundedButton from "../ui/RoundedButton";

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
    label: "Take Away",
  },
];

interface VppPanelProps {
  onSelectComponent: (index: number) => void;
}

const VppPanel = ({ onSelectComponent }: VppPanelProps) => {
  const [page, setPage] = useState(0);
  const [component, setComponent] = useState<number>();

  useEffect(() => {
    setComponent(undefined);
  }, [page]);

  return (
    <Panel
      cooperator="/vr-laboratory/vpp/Slide_1_microfactory_logo.png"
      onClick={() => setPage(1)}
      title="Vat Photopolymerization"
      showWelcome={page === 0}
      subtitle="Welcome to the Process Area"
      transformRotateY={45}
      transformTranslateX={206.125}
      transformTranslateY={-124}
      transformTranslateZ={-662.05}
    >
      <Slides slides={slides} count={5} step={page} setStep={setPage}>
        <Container flexDirection="column" gap={8}>
          <Image src="/vr-laboratory/vpp/Slide_2_Table_Process_Overview.png" />
          <Span fontWeight={600} width={200}>
            Click on the buttons below to locate the respective parts inside the
            printer!
          </Span>
          <Container
            flexDirection="row"
            gap={2}
            alignItems="center"
            width={200}
          >
            <RoundedButton
              outline={component === 0}
              onClick={() => (setComponent(0), onSelectComponent(0))}
            >
              Printing Resin
            </RoundedButton>
            <RoundedButton
              outline={component === 1}
              onClick={() => (setComponent(1), onSelectComponent(1))}
            >
              Build Platform
            </RoundedButton>
            <RoundedButton
              outline={component === 2}
              onClick={() => (setComponent(2), onSelectComponent(2))}
            >
              Optics Unit & Resin Bath
            </RoundedButton>
            <RoundedButton
              outline={component === 3}
              onClick={() => (setComponent(3), onSelectComponent(3))}
            >
              Solvent Cleaner
            </RoundedButton>
            <RoundedButton
              outline={component === 4}
              onClick={() => (setComponent(4), onSelectComponent(4))}
            >
              Curing Unit
            </RoundedButton>
          </Container>
          <Container width={200}>
            {component === 0 && (
              <Span>
                The Printing Resin is a photopolymer liquid that solidifies
                layer by layer when exposed to UV light, forming the final 3D
                object with high precision and smooth surface quality.
              </Span>
            )}
            {component === 1 && (
              <Span>
                The Build Platform is a metal plate on which the printing is
                done, and the part is built.
              </Span>
            )}
            {component === 2 && (
              <Container flexDirection="column">
                <Span>
                  The Optics Unit directs and shapes the UV light to accurately
                  cure each layer of resin and projects the UV light in the
                  shape of a respective bitmap.
                </Span>
                <Span>
                  The Resin Bath holds the liquid photopolymer and provides the
                  medium in which the Build Platform dips to enable
                  layer-by-layer curing during printing.
                </Span>
              </Container>
            )}
            {component === 3 && (
              <Span>
                The Solvent Cleaner removes uncured resin from the printed part
                after the print job is complete, ensuring a clean surface before
                the final UV curing.
              </Span>
            )}
            {component === 4 && (
              <Span>
                The Curing Unit exposes the printed part to controlled UV light
                to fully solidify the material, enhancing its mechanical
                strength properties.
              </Span>
            )}
          </Container>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Image src="/vr-laboratory/vpp/Slide_9_Table_Pre-processing_Parameters.png" />
          <Span width={200}>
            Earlier in the Pre-processing dashboard, you have optimized all the
            printing parameters and have successfully set up the printer. These
            optimized parameters have been uploaded to the printer.
          </Span>
          <Span fontWeight={600} width={200}>
            With these parameters, you can now commence the printing job!
          </Span>
        </Container>
      </Slides>
    </Panel>
  );
};

export default VppPanel;
