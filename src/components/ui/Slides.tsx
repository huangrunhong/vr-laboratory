import React, { Children } from "react";
import { Container, Image, Svg, Text } from "@react-three/uikit";

import colors from "../../shared/colors";

import RoundedButton from "./RoundedButton";

export interface Slide {
  page: number[];
  label: string;
  icon?: string;
  abbr?: string;
}

interface SlidesProps {
  children: React.ReactNode;
  slides: Slide[];
  count: number;
  step: number;
  setStep: (step: number) => void;
  showPageNumber?: boolean;
  sidebarWidth?: number;
}

interface MenuProps {
  slide: Slide;
  step: number;
  setStep: (step: number) => void;
}

const Menu = ({ slide, step, setStep }: MenuProps) => (
  <Container
    key={slide.page[0]}
    alignItems="center"
    padding={4}
    gap={4}
    borderRadius={2}
    cursor="pointer"
    backgroundColor={
      slide.page.includes(step) ? colors.primaryHover : undefined
    }
    hover={{ backgroundColor: colors.primaryHover }}
    onClick={() => setStep(slide.page[0])}
  >
    {slide.icon && !slide.abbr && (
      <Container width={8} height={8}>
        <Image src={slide.icon} />
      </Container>
    )}
    {slide.abbr && (
      <Text width={8} fontSize={4} color="#fff" fontWeight={700}>
        {slide.abbr}
      </Text>
    )}
    <Text
      wordBreak="keep-all"
      fontSize={6}
      color="#fff"
      fontWeight={slide.page.includes(step) ? 700 : 500}
    >
      {slide.label}
    </Text>
  </Container>
);

const Slides = ({
  children,
  count,
  slides,
  showPageNumber,
  step,
  setStep,
  sidebarWidth,
}: SlidesProps) => (
  <Container
    width="100%"
    height="100%"
    gap={4}
    padding={4}
    backgroundColor="#0064c0"
    borderRadius={4}
  >
    <Container flexDirection="column" gap={1} width={sidebarWidth}>
      {slides.map((slide) => (
        <Menu key={slide.label} slide={slide} step={step} setStep={setStep} />
      ))}
      <Container flexGrow={1} />
      <Container justifyContent="center" padding={4}>
        <RoundedButton inverse outline onClick={() => setStep(0)}>
          Home
        </RoundedButton>
      </Container>
    </Container>
    <Container
      height="100%"
      padding={6}
      flexGrow={1}
      flexDirection="column"
      justifyContent="space-between"
      backgroundColor="#fff"
      borderRadius={2}
    >
      {Children.map(children, (child, index) =>
        step === index + 1 ? child : null
      )}
      {showPageNumber && (
        <Container paddingX={0} justifyContent="space-between">
          <Text fontSize={4} fontWeight={400} flexGrow={1}>
            {step.toString()}
          </Text>
          <Container gap={6}>
            <Svg
              width={10}
              color={step === 1 ? colors.foregroundMuted : colors.foreground}
              src="/vr-laboratory/svg/arrow-left-circle-line.svg"
              cursor="pointer"
              hover={{ color: step === 1 ? undefined : colors.primary }}
              onClick={() => setStep(Math.max(1, step - 1))}
            />
            <Svg
              width={10}
              color={
                step === count ? colors.foregroundMuted : colors.foreground
              }
              src="/vr-laboratory/svg/arrow-right-circle-line.svg"
              cursor="pointer"
              hover={{ color: step === count ? undefined : colors.primary }}
              onClick={() => setStep(Math.min(count, step + 1))}
            />
          </Container>
        </Container>
      )}
    </Container>
  </Container>
);

export default Slides;
