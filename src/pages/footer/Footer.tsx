import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SocialMedias } from "../../components/socialMedias/SocialMedias";
import * as S from "./Footer.styled";

export const Footer = () => {
  const animationControl = useAnimation();
  const { inView, ref } = useInView();

  if (inView) {
    animationControl.start({
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 1,
      },
    });
  }
  return (
    <S.FooterWrapper
      id="Footer"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      animate={animationControl}
    >
      <SocialMedias />
      <S.CopyrightText>
        Michał Żygiel
        <S.Year>©2022</S.Year>.
      </S.CopyrightText>
    </S.FooterWrapper>
  );
};
