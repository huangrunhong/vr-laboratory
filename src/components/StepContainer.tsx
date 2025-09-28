import { Container, Svg } from '@react-three/uikit';
import { Children } from 'react';

interface StepContainerProps {
  children: React.ReactNode;
  step: number;
  setStep: (step: number) => void;
}

const StepContainer = ({ children, step, setStep }: StepContainerProps) => (
  <Container
    width={170}
    height="100%"
    padding={6}
    flexDirection="column"
    justifyContent="space-between"
    backgroundColor="#fff"
    borderRadius={2}
  >
    {Children.map(children, (child, index) => (step === index ? child : null))}
    <Container gap={6} alignSelf="flex-end">
      <Svg
        width={10}
        color="#374151"
        src="/vr-laboratory/svg/arrow-left-circle-line.svg"
        cursor="pointer"
        hover={{ color: '#0064c0' }}
        onClick={() => setStep(Math.max(0, step - 1))}
      />
      <Svg
        width={10}
        color="#374151"
        src="/vr-laboratory/svg/arrow-right-circle-line.svg"
        cursor="pointer"
        hover={{ color: '#0064c0' }}
        onClick={() => setStep((step + 1) % 5)}
      />
    </Container>
  </Container>
);

export default StepContainer;
