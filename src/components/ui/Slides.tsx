import React, { Children, useState } from "react";
import { Container, Image, Svg, Text } from "@react-three/uikit";

import colors from "../../shared/colors";

export interface Slide {
  page: number[];
  label: string;
  icon?: string;
}

interface SlidesProps {
  children: React.ReactNode;
  slides: Slide[];
  count: number;
  showPageNumber?: boolean;
}

const homePage: Slide = {
  page: [0],
  label: "Main Page",
  icon: "/vr-laboratory/icon/home-line.png",
};

const Slides = ({ children, count, slides, showPageNumber }: SlidesProps) => {
  const [step, setStep] = useState(0);

  return (
    <Container
      width="100%"
      height="100%"
      gap={4}
      padding={4}
      backgroundColor="#0064c0"
      borderRadius={4}
    >
      <Container flexDirection="column" gap={1}>
        {[...slides, homePage].map((slide) => (
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
            {slide.icon && (
              <Container width={8} height={8}>
                <Image src={slide.icon} />
              </Container>
            )}
            <Text
              wordBreak="keep-all"
              fontSize={6}
              color="#fff"
              fontWeight={500}
            >
              {slide.label}
            </Text>
          </Container>
        ))}
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
          step === index ? child : null
        )}
        <Container paddingX={0} justifyContent="space-between">
          <Text fontSize={4} fontWeight={400} flexGrow={1}>
            {showPageNumber
              ? `${(step + 1).toString()} / ${count.toString()}`
              : ""}
          </Text>
          <Container gap={6}>
            <Svg
              width={10}
              color="#374151"
              src="/vr-laboratory/svg/arrow-left-circle-line.svg"
              cursor="pointer"
              hover={{ color: "#0064c0" }}
              onClick={() => setStep(Math.max(0, step - 1))}
            />
            <Svg
              width={10}
              color="#374151"
              src="/vr-laboratory/svg/arrow-right-circle-line.svg"
              cursor="pointer"
              hover={{ color: "#0064c0" }}
              onClick={() => setStep((step + 1) % count)}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Slides;
