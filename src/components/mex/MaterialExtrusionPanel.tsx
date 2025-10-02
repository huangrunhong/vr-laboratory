import { Container, Image } from '@react-three/uikit';
import Slides, { Slide } from '../ui/Slides';
import Span from '../ui/Span';
import RoundedButton from '../ui/RoundedButton';
import Panel from '../ui/Panel';
import Information from '../ui/Information';
import { useEffect, useState } from 'react';

const slides: Slide[] = [
  {
    page: [1],
    icon: '/vr-laboratory/bjt/00_Icon_Printer_Components.png',
    label: 'Printer Components',
  },
  {
    page: [2],
    icon: '/vr-laboratory/bjt/01_Icon_Pre-processing.png',
    label: 'Pre-processing',
  },
  {
    page: [3],
    icon: '/vr-laboratory/bjt/02_Icon_Printing.png',
    label: 'Printing',
  },
  {
    page: [4],
    icon: '/vr-laboratory/bjt/03_Icon_Post-processing.png',
    label: 'Post-processing',
  },
  {
    page: [5],
    icon: '/vr-laboratory/bjt/04_Icon_Take_Aways.png',
    label: 'Takeaways',
  },
];

interface MaterialExtrusionProps {
  automaticBedLeveling: () => void;
  filamentLoading: () => void;
  preheating: () => void;
  displayPart: () => void;
  play: () => void;
  onSelectComponent: (index: number) => void;
}

const MaterialExtrusionPanel = ({
  automaticBedLeveling,
  filamentLoading,
  preheating,
  displayPart,
  play,
  onSelectComponent,
}: MaterialExtrusionProps) => {
  const [page, setPage] = useState(0);
  const [component, setComponent] = useState<number>();

  useEffect(() => {
    onSelectComponent(-1);
    setComponent(undefined);
  }, [page]);

  return (
    <Panel
      cooperator="/vr-laboratory/mex/Slide_1_Snapmaker_Logo_White.png"
      onClick={() => setPage(1)}
      title="Material Extrusion"
      showWelcome={page === 0}
      subtitle="Welcome to the Process Area"
      transformRotateY={-135}
      transformTranslateX={1780}
      transformTranslateY={-135}
      transformTranslateZ={-40}
    >
      <Slides slides={slides} count={5} step={page} setStep={setPage}>
        <Container flexDirection="column" gap={8}>
          <Image src="/vr-laboratory/mex/Slide_2_Table_Processoverview_MEX.png" flexGrow={1} />
          <Span fontWeight={700} width={200}>
            Click on the buttons below to locate the respective parts inside the printer!
          </Span>
          <Container justifyContent="space-between" gap={3}>
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
              Build Plate
            </RoundedButton>
            <RoundedButton
              outline={component === 2}
              onClick={() => (setComponent(2), onSelectComponent(2))}
            >
              Extruder
            </RoundedButton>
            <RoundedButton
              outline={component === 3}
              onClick={() => (setComponent(3), onSelectComponent(3))}
            >
              Printing Material
            </RoundedButton>
          </Container>
          <Container width={204}>
            {component === 0 && (
              <Span>
                The Build Platform is the structural component of the printer that supports and
                moves the Build Plate, enabling precise mechanical motion along the X and Y axes
                while maintaining stability. It is often heated to improve adhesion and prevent
                warping.
              </Span>
            )}
            {component === 1 && (
              <Span>
                The Build Plate is the flat surface that directly supports the first layer of
                extruded printing material, serving as the foundation for the entire print. On the
                Snapmaker Artisan, the Build Plate rests on top of the Build Platform. It is both
                removable and flexible, making it easy to detach and bend for convenient print
                removal.
              </Span>
            )}
            {component === 2 && (
              <Span>
                The Extruder is the mechanism that feeds, melts, and deposits the Printing Material
                to create the 3D object layer by layer. It plays a critical role in ensuring
                precision, material compatibility, and overall print quality.
              </Span>
            )}
            {component === 3 && (
              <Span>
                Printing Material in MEX is typically a thermoplastic filament that is melted and
                extruded to form each layer of the 3D object. The filament is supplied on spools and
                is available in different materials (ABS, PETG, PLA, or TPU), each offering
                different mechanical, thermal, and aesthetic properties. The choice of filament
                influences print quality, strength, flexibility, and ease of printing.
              </Span>
            )}
          </Container>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Image src="/vr-laboratory/mex/Slide_7_Table_Printing_Parameters_MEX.png" />
          <Container alignItems="center" justifyContent="space-between">
            <Span width={120} fontWeight={700}>
              Level the Build Platform using the Automatic Bed Leveling function!
            </Span>
            <RoundedButton outline={component === 1} onClick={() => automaticBedLeveling()}>
              Automatic Bed Leveling
            </RoundedButton>
          </Container>
          <Container alignItems="center" justifyContent="space-between">
            <Span width={120} fontWeight={700}>
              Load the Printing Material!
            </Span>
            <RoundedButton outline={component === 1} onClick={() => filamentLoading()}>
              Filament Loading
            </RoundedButton>
          </Container>
          <Container alignItems="center" justifyContent="space-between">
            <Span width={160} fontWeight={700}>
              Preheat the nozzle and the Build Plate!
            </Span>
            <RoundedButton outline={component === 1} onClick={() => preheating()}>
              Preheating
            </RoundedButton>
          </Container>
          <Information flexDirection="column" height={146} positionTop={-2} alignSelf="flex-end">
            <Span fontSize={6} fontWeight={700}>
              Importance of Automatic Bed Leveling:
            </Span>
            <Span fontSize={5.5} paddingTop={4} paddingBottom={8}>
              Automatic Bed Leveling ensures that the nozzle maintains a consistent, optimal
              distance from the Build Plate across the entire build surface. It uses sensors to
              measure the plates height at multiple points and compensates for any variations by
              dynamically adjusting the nozzles height during printing. Even slight unevenness can
              cause first-layer issues such as poor adhesion, warping, or complete print failure.
            </Span>
            <Span fontSize={6} fontWeight={700}>
              Importance of Filament Loading:
            </Span>
            <Span fontSize={5.5} paddingTop={4} paddingBottom={8}>
              Proper Filament Loading ensures the printer has a continuous supply of material ready
              for extrusion. Correct loading helps prevent clogs and interruptions, enabling smooth,
              reliable printing and improving overall print quality.
            </Span>
            <Span fontSize={6} fontWeight={700}>
              Importance of Preheating:
            </Span>
            <Span fontSize={5.5} paddingTop={4} paddingBottom={8}>
              Preheating the nozzle and the Build Plate ensures the filament melts and flows
              smoothly, promoting proper adhesion of the first layer. It also helps prevent clogs,
              poor extrusion, and warping, improving overall print quality.
            </Span>
          </Information>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Span fontWeight={700} width={200}>
            Start Printing and observe the layer-by-layer build-up of the part!
          </Span>
          <RoundedButton outline={component === 1} onClick={() => play()}>
            Start Printing
          </RoundedButton>
          <Span color="#C00000" width={200} marginTop={98}>
            NOTE: The process is compacted to avoid extended exposure to VR environment.
          </Span>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Image
            alignSelf="center"
            src="/vr-laboratory/mex/Slide_10_Image_Post-processing_Steps_MEX.png"
            width={200}
          />
          <Container marginTop={8} justifyContent="space-between">
            <Span color="#C00000" width={180} marginTop={0}>
              NOTE: To see the detailed steps, check out the Post-processing Dashboard.
            </Span>
            <Information flexDirection="column" paddingY={4} height={140} positionTop={-144}>
              <Span fontWeight={700} fontSize={5}>
                Cooldown:
              </Span>
              <Span paddingTop={6} fontSize={5}>
                After printing is finished, it is important to let the model cool down gradually
                while still on the Build Plate. This allows the material to solidify completely and
                helps prevent warping or cracking that can occur if the model is removed while it is
                still warm and flexible.
              </Span>
              <Span fontWeight={700} fontSize={5}>
                Model Extraction:
              </Span>
              <Span paddingTop={6} fontSize={5}>
                Once the model has cooled, it can be carefully removed from the Build Plate. This
                step often requires the use of a tool to gently lift the model, especially if it is
                strongly stuck on the Build Plate, to avoid damaging the model or the Build Plate
                surface.
              </Span>
              <Span fontWeight={700} fontSize={5}>
                Support Removal:
              </Span>
              <Span paddingTop={6} fontSize={5}>
                If the model included support structures, these need to be removed after extraction.
                Supports are typically designed to be easily removed by hand or with simple tools,
                but care must be taken to avoid breaking or damaging the model during this process.
              </Span>
              <Span fontWeight={700} fontSize={5}>
                Surface Finishing:
              </Span>
              <Span paddingTop={6} fontSize={5}>
                A final Surface Finishing can improve the appearance and feel of the model. This can
                include sanding rough areas, trimming excess filament, or using chemical solutions,
                depending on the material, to achieve an even smoother result.
              </Span>
            </Information>
          </Container>
        </Container>
        <Container flexDirection="column" gap={8}>
          <Image src="/vr-laboratory/mex/Slide_2_Table_Processoverview_MEX.png" flexGrow={1} />
          <Container
            flexDirection="row"
            gap={4}
            alignItems="flex-end"
            marginBottom={18.5}
            justifyContent="space-between"
          >
            <RoundedButton outline={component === 1} onClick={() => displayPart()}>
              Display Part
            </RoundedButton>
            <Image src="/vr-laboratory/mex/Slide_12_Takeaways_MEX.png" width={129.5} />
          </Container>
          <Information flexDirection="column" gap={8} height={144}>
            <Image src="/vr-laboratory/mex/Slide_13_AM_studio_Overview.png" />
            <Container flexDirection="column" gap={2}>
              <Span>Congratulations!</Span>
              <Span>
                You have successfully completed the Process Area. Now go to the Post-processing
                Dashboard to have a detailed overview of the Post-processing steps.
              </Span>
            </Container>
          </Information>
        </Container>
      </Slides>
    </Panel>
  );
};

export default MaterialExtrusionPanel;
