import { useState } from 'react';
import { Container } from '@react-three/uikit';

import Panel from '../ui/Panel';
import Slides, { Slide } from '../ui/Slides';
import Image from '../ui/Image';

const slides: Slide[] = [
  {
    icon: '/amHub/icons/book-3-line.png',
    page: [1],
    label: 'Definition',
  },
  {
    icon: '/amHub/icons/time-line.png',
    page: [2, 3, 4, 5, 6, 7, 8, 9],
    label: 'Chronology',
  },
  {
    abbr: 'BJT',
    page: [10, 11, 12, 13, 14, 15],
    label: 'Binder Jetting',
  },
  {
    abbr: 'DED',
    page: [16, 17, 18, 19],
    label: 'Directed Energy Deposition',
  },
  {
    abbr: 'MEX',
    page: [20, 21, 22, 23, 24, 25],
    label: 'Material Extrusion',
  },
  {
    abbr: 'MJT',
    page: [26, 27, 28, 29, 30],
    label: 'Material Jetting',
  },
  {
    abbr: 'PBF',
    page: [31, 32, 33, 34, 35],
    label: 'Powder Bed Fusion',
  },
  {
    abbr: 'SHL',
    page: [36, 37, 38, 39, 40],
    label: 'Sheet Lamination',
  },
  {
    abbr: 'VPP',
    page: [41, 42, 43, 44],
    label: 'Vat Photopolymerization',
  },

  {
    icon: '/amHub/icons/history-line.png',
    page: [45, 46, 47],
    label: 'Future Trends',
  },
];

const AmHubPanel = () => {
  const [page, setPage] = useState(0);

  return (
    <Panel
      title="Additive Manufacturing Hub"
      showWelcome={page === 0}
      subtitle="Welcome to the"
      onClick={() => setPage(1)}
      transformRotateY={-180}
      transformTranslateX={1048}
      transformTranslateY={-160}
      transformTranslateZ={1126}
    >
      <Slides slides={slides} count={47} showPageNumber step={page} setStep={setPage}>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Definition_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Chronology_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Chronology_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Chronology_Slide_3.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Chronology_Slide_4.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Chronology_Slide_5.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Chronology_Slide_6.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Chronology_Slide_7.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Chronology_Slide_8.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_BJT_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_BJT_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_BJT_Slide_3.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_BJT_Slide_4.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_BJT_Slide_5.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_BJT_Slide_6.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_DED_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_DED_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_DED_Slide_3.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_DED_Slide_4.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MEX_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MEX_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MEX_Slide_3.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MEX_Slide_4.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MEX_Slide_5.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MEX_Slide_6.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MJT_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MJT_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MJT_Slide_3.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MJT_Slide_4.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_MJT_Slide_5.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_PBF_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_PBF_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_PBF_Slide_3.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_PBF_Slide_4.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_PBF_Slide_5.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_SHL_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_SHL_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_SHL_Slide_3.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_SHL_Slide_4.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_SHL_Slide_5.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_VPP_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_VPP_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_VPP_Slide_3.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_VPP_Slide_4.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Future_Trends_Slide_1.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Future_Trends_Slide_2.png" />
        </Container>
        <Container>
          <Image height={150} flexGrow={1} src="/amHub/images/AM-Hub_Future_Trends_Slide_3.png" />
        </Container>
      </Slides>
    </Panel>
  );
};

export default AmHubPanel;
