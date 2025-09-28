import { Container, Image } from "@react-three/uikit";
import Panel from "../ui/Panel";

import { useEffect, useState } from "react";
import Slides, { Slide } from "../ui/Slides";
import Span from "../ui/Span";
import RoundedButton from "../ui/RoundedButton";
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

interface VppPanelProps {
  displayPart: () => void;
  play: () => void;
  onSelectComponent: (index: number) => void;
}

const VppPanel = ({ displayPart, play, onSelectComponent }: VppPanelProps) => {
  const [page, setPage] = useState(0);
  const [component, setComponent] = useState<number>();

  useEffect(() => {
    onSelectComponent(-1);
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
        <Container flexDirection="column" gap={8} width={204}>
          <Image
            src="/vr-laboratory/vpp/Slide_2_Table_Processoverview_VPP.png"
            flexGrow={1}
            width={196}
          />
          <Span fontWeight={700} width={200}>
            Click on the buttons below to locate the respective parts inside the
            printer!
          </Span>
          <Container
            flexDirection="row"
            justifyContent="space-between"
            gap={1}
            alignItems="center"
            width={196}
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
          <Span fontWeight={700} width={200}>
            With these parameters, you can now commence the printing job!
          </Span>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Span fontWeight={700} width={200}>
            Start Printing and observe the layer-by-layer build-up of the Part!
          </Span>
          <RoundedButton outline={component === 1} onClick={() => play()}>
            Start Printing
          </RoundedButton>
          <Span color="#C00000" width={200} marginTop={98}>
            Note: The printing process is compacted to avoid extended exposure
            to the VR environment.
          </Span>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Span width={200} fontSize={6}>
            The post-processing steps of Vat Photopolymerization, including
            Cleaning and Curing, are already carried out in the process shown
            and are explained in detail in the information section.
          </Span>
          <Span width={200} fontSize={6}>
            Only the supports of the model must be removed using
            scissors/cutters.
          </Span>
          <Image
            alignSelf="center"
            src="/vr-laboratory/vpp/Slide_11_Post-processing.png"
            width={200}
          />
          <Container marginBottom={4} justifyContent="space-between">
            <Span color="#C00000" width={180} marginTop={0} fontSize={6}>
              Note: To see the detailed steps, check out the Post-processing
              Dashboard.
            </Span>
            <Information flexDirection="column" height={144} positionTop={-150}>
              <Span paddingY={4} fontWeight={700} fontSize={5.5}>
                Cleanning:
              </Span>
              <Span paddingY={4} fontSize={5.5}>
                When all the layers are printed, the build platform moves the
                entire Part out of the Resin Bath, holds for some time to allow
                the uncured resin to drip back into the Resin Bath, and then
                cleans the Part in the Solvent Cleaner.
              </Span>
              <Span paddingY={4} fontSize={5.5}>
                The Cleaning Time of 5 minutes is suitable to effectively remove
                uncured resin from the Part’s surface without damaging it. Thus,
                it ensures the Part is clean and ready for curing, maintaining
                both mechanical and aesthetic quality.
              </Span>
              <Span paddingY={4} fontSize={5.5} fontWeight={700} marginTop={4}>
                Curing:
              </Span>
              <Span paddingY={4} fontSize={5.5}>
                After cleaning the Part, it is exposed to UV light to cure all
                layers, resulting in a single Part.
              </Span>
              <Span paddingY={4} fontSize={5.5}>
                The Curing Time of 10 minutes is in the optimal range, giving
                the Part structural strength and a smooth surface finish. Curing
                ensures that the layers are bonded properly and there is no
                damage to the part due to uneven bonding of material at the
                layer interface. Curing the part is essential to achieve the
                intended mechanical properties.
              </Span>
            </Information>
          </Container>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Image
            src="/vr-laboratory/vpp/Slide_2_Table_Processoverview_VPP.png"
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
            <Image
              src="/vr-laboratory/vpp/Slide_13_Takeaways.png"
              width={129.5}
            />
          </Container>
          <Information flexDirection="column" gap={8} height={144}>
            <Image src="/vr-laboratory/vpp/Slide_13_AM-Studio.png" />
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

export default VppPanel;
