import { SectionWrapper } from "../../components/sectionWrapper/SectionWrapper";
import * as S from "./About.styled";
import { Description } from "./description/Description";
import { Experience } from "./experience/Experience";
import { Skills } from "./skills/Skills";

type AboutProps = {};

export const About = ({}: AboutProps) => {
  
  return (
    <SectionWrapper title="About">
    <S.ColumnsWrapper>
         <S.LeftColumn>
        <Description />
     </S.LeftColumn>
     <S.RightColumn>
        <Skills />
        <Experience />
     </S.RightColumn>
    </S.ColumnsWrapper>
    </SectionWrapper>
  );
};
