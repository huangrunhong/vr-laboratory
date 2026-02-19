import { useState } from 'react';

import Panel from '../ui/Panel';
import Slides, { Slide } from '../ui/Slides';
import Image from '../ui/Image';

const slides: Slide[] = [
  {
    page: [1],
    icon: '/icon/shake-hands-line.png',
    label: 'Welcome',
  },
  {
    page: [2],
    icon: '/icon/footprint-line.png',
    label: 'Movement',
  },
  { page: [3], icon: '/icon/cursor-line.png', label: 'Clicking' },
  {
    page: [4],
    icon: '/icon/search-line.png',
    label: 'Inspection',
  },
];

interface TutorialPanelProps {
  onClick: () => void;
}

const TutorialPanel = ({ onClick }: TutorialPanelProps) => {
  const [page, setPage] = useState(0);

  return (
    <Panel
      title="Tutorial"
      showWelcome={page === 0}
      subtitle="Welcome to the Virtual Reality Lab Additive Manufacturing"
      onClick={() => (setPage(1), onClick())}
      transformRotateY={-180}
      transformTranslateX={-500}
      transformTranslateY={-160}
      transformTranslateZ={315}
    >
      <Slides slides={slides} count={4} step={page} setStep={setPage}>
        <Image src="/tutorials/Lobby_Page1.png" marginLeft={7} />
        <Image src="/tutorials/Lobby_Page2.png" marginLeft={7} />
        <Image src="/tutorials/Lobby_Page3.png" marginLeft={7} />
        <Image src="/tutorials/Lobby_Page4.png" marginLeft={7} />
      </Slides>
    </Panel>
  );
};

export default TutorialPanel;
