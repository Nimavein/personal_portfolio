import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "../../components/button/Button";
import { ParticlesBackground } from "../../components/particlesBackground/ParticlesBackground";
import * as S from "./Home.styled";

type HomeProps = {};

export const Home = ({}: HomeProps) => {
  return (
    <>
      <ParticlesBackground />
      <S.Wrapper>
        <S.IntroductionText>
          Hello, I'm <S.Name>Michał Żygiel</S.Name>.
        </S.IntroductionText>
        <S.IntroductionText>I'm a Frontend Developer.</S.IntroductionText>
        <Button>DOWNLOAD CV</Button>
        <S.Link to="About" spy={true} smooth={true}>
          <S.ScrollDownButton>
            <ArrowDownOutlined />
          </S.ScrollDownButton>
        </S.Link>
      </S.Wrapper>
    </>
  );
};
