import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { Button } from "../button/Button";
import * as S from "./CtaSection.styled";

export const CtaSection = () => {
  const animationControl = useAnimation();
  const { inView, ref } = useInView();

  if (inView) {
    animationControl.start({
      opacity: 1,
      transition: {
        delay: 0.4,
        duration: 1
      },
    });
  }

  return (
    <S.CtaWrapper
      ref={ref}
      initial={{
        opacity: 0,
      }}
      animate={animationControl}
    >
      <S.CtaText>Do you want to talk about ...</S.CtaText>
      <Link to="Contact" spy={true} smooth={true}>
        <Button>Contact me!</Button>
      </Link>
    </S.CtaWrapper>
  );
};
