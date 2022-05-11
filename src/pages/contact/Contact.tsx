import { SectionWrapper } from "../../components/sectionWrapper/SectionWrapper";
import { theme } from "../../style";
import * as S from "./Contact.styled";

export const Contact = () => {
  return (
    <SectionWrapper
      backgroundColor={theme.color.darkGrey}
      textColor={theme.color.white}
      title="Contact"
    >
      <S.ContactWrapper>Contact</S.ContactWrapper>
    </SectionWrapper>
  );
};
