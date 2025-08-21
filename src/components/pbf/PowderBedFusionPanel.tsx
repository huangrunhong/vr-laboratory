import { useEffect, useState } from "react";
import { Container, Image } from "@react-three/uikit";
import Panel from "../ui/Panel";
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

interface PowderBedFusionPanelProps {
  displayPart: () => void;
  play: () => void;
  onSelectComponent: (index: number) => void;
}

const PowderBedFusionPanel = ({
  play,
  onSelectComponent,
  displayPart,
}: PowderBedFusionPanelProps) => {
  const [page, setPage] = useState(0);

  const [component, setComponent] = useState<number>();

  useEffect(() => {
    setComponent(undefined);
    onSelectComponent(-1);
  }, [page]);

  return (
    <Panel
      cooperator="/vr-laboratory/pbf/Slide_1_EOS_logo_white.png"
      onClick={() => setPage(1)}
      title="Powder Bed Fusion"
      showWelcome={page === 0}
      subtitle="Welcome to the Process Area"
      transformRotateY={45}
      transformTranslateX={800}
      transformTranslateY={-124}
      transformTranslateZ={-662.05}
    >
      <Slides slides={slides} count={5} step={page} setStep={setPage}>
        <Container flexDirection="column" gap={8}>
          <Image
            src="/vr-laboratory/pbf/Slide_2_11_Process_Overview_Table.png"
            flexGrow={1}
          />
          <Span fontWeight={600} width={200}>
            Click on the buttons below to locate the respective parts inside the
            printer!
          </Span>
          <Container justifyContent="space-between" gap={3} width={196}>
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
              Laser Scanning Unit
            </RoundedButton>
            <RoundedButton
              outline={component === 2}
              onClick={() => (setComponent(2), onSelectComponent(2))}
            >
              Recoating Unit
            </RoundedButton>
            <RoundedButton
              outline={component === 3}
              onClick={() => (setComponent(3), onSelectComponent(3))}
            >
              Recirculating Filter System
            </RoundedButton>
          </Container>
          <Container width={204}>
            {component === 0 && (
              <Span>
                The Build Platform is a metal plate on which the printing is
                done, and the part is built.
              </Span>
            )}
            {component === 1 && (
              <Span>
                The Laser Scanning Unit is comprised of a laser source, a
                scanner, and an optical system. The laser provides energy to
                melt and fuse the powder, the scanner deflects and directs the
                laser beam, and the optical system focuses the beam onto the
                powder bed.
              </Span>
            )}
            {component === 2 && (
              <Span>
                The Recoating Unit pushes the powder from the powder reservoir
                onto the Build Platform and ensures the formation of an even
                powder layer.
              </Span>
            )}
            {component === 3 && (
              <Span>
                The Recirculating Filter System ensures a clean build
                environment. It channels a gas flow over the build platform to
                remove the process byproducts like fumes and smatter generated
                during the laser melting. Additionally, it also helps stabilise
                the thermal environment.
              </Span>
            )}
          </Container>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Image src="/vr-laboratory/pbf/Slide_7_Printing Parameters Table.png" />
          <Span width={200}>
            Earlier in the Pre-processing dashboard, you have optimized all the
            printing parameters and have successfully set-up the printer. These
            optimized parameters have been uploaded to the printer.
          </Span>
          <Span fontWeight={600} width={200}>
            With these parameters, you can now commence the printing job!
          </Span>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Span fontWeight={600} width={200}>
            Start Printing and observe the layer-by-layer build-up of the print
            job, which is an arrangement of 18 parts!
          </Span>
          <RoundedButton outline={component === 1} onClick={() => play()}>
            Start Printing
          </RoundedButton>
          <Span color="#C00000" width={200} marginTop={98}>
            Note: The process is compacted to avoid extended exposure to the VR
            environment.
          </Span>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Span width={200} fontSize={6}>
            Printing is followed by multiple Post-processing steps.
          </Span>
          <Image
            alignSelf="center"
            src="/vr-laboratory/pbf/Slide_9_Post-processing_steps.png"
            width={200}
          />
          <Container marginTop={8} justifyContent="space-between">
            <Span color="#C00000" width={180} marginTop={0}>
              Note: To see the detailed steps, check out the Post-processing
              Dashboard.
            </Span>
            <Information flexDirection="column" height={134} positionTop={-134}>
              <Span paddingY={4} fontSize={5.5}>
                After printing, you cannot see the part yet; the Build Platform
                has the powder bed with the part in it.
              </Span>
              <Span paddingY={4} fontSize={5.5}>
                The first step is to remove the Build Platform from the printer.
                The loose powder is cleared using a brush.
              </Span>

              <Span paddingY={4} fontSize={5.5}>
                The parts are attached to the Build Platform. They are separated
                from the platform using Electrical Discharge Machining (EDM)
                wire cutting.
              </Span>
              <Span paddingY={4} fontSize={5.5}>
                The final parts obtained then undergo a heat treatment as
                recommended by EOS for Aluminium AlSi10Mg. The parts are
                solution annealed for 30 minutes at 530 °C and then water
                quenched. It is then followed by artificial aging for 360
                minutes at 165 °C, after which the parts are air cooled.
              </Span>
            </Information>
          </Container>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Image
            src="/vr-laboratory//pbf/Slide_2_11_Process_Overview_Table.png"
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
              src="/vr-laboratory/pbf/Slide_11_Takeaways_Table.png"
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

export default PowderBedFusionPanel;
