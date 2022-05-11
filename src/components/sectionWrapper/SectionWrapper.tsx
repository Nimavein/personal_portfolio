import { HTMLAttributes } from "react";
import * as S from "./SectionWrapper.styled";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

type SectionWrapperProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
};

export const SectionWrapper = ({
  title,
  children,
  backgroundColor,
  textColor,
}: SectionWrapperProps & HTMLAttributes<HTMLDivElement>) => {
  const animationControl = useAnimation();
  const { inView, ref } = useInView();

  if (inView) {
    animationControl.start({
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.5
      },
    });
  }

  return (
    <div ref={ref} style={{overflow:"hidden"}}>
      <S.PageWrapper
        initial={{
          x: "100vw",
        }}
        animate={animationControl}
        $backgroundColor={backgroundColor}
        id={title}
      >
        <S.Title $textColor={textColor}>{title}</S.Title>
        <S.Separator $textColor={textColor} />
        {children}
      </S.PageWrapper>
    </div>
  );
};
