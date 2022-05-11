import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "../../components/button/Button";
import { ParticlesBackground } from "../../components/particlesBackground/ParticlesBackground";
import { fadeIn } from "../../utils/animationsVariants";
import * as S from "./Home.styled";

export const Home = () => {
  return (
    <>
      <ParticlesBackground />
      <S.Wrapper
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <S.IntroductionText>
          Hello, I'm <S.Name>Michał Żygiel</S.Name>.
        </S.IntroductionText>
        <S.IntroductionText>I'm a Frontend Developer.</S.IntroductionText>
        <Button type="button">DOWNLOAD CV</Button>
        <S.Link to="About" spy={true} smooth={true}>
          <S.ScrollDownButton
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.4,
                yoyo: Infinity,
              },
            }}
          >
            <ArrowDownOutlined />
          </S.ScrollDownButton>
        </S.Link>
      </S.Wrapper>
    </>
  );
};
