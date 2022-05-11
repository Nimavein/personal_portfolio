import { SectionWrapper } from "../../components/sectionWrapper/SectionWrapper";
import * as S from "./About.styled";
import { Description } from "./description/Description";
import { Experience } from "./experience/Experience";
import { Skills } from "./skills/Skills";

type AboutProps = {};

export const About = ({}: AboutProps) => {
  return (
    <SectionWrapper title="About">
      <S.SectionsWrapper>
        <S.TopSection>
          <S.ImageWrapper></S.ImageWrapper>
          <Description />
        </S.TopSection>
        <S.BottomSection>
          <Skills />
          <Experience />
        </S.BottomSection>
      </S.SectionsWrapper>
    </SectionWrapper>
  );
};
