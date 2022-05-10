import { SectionWrapper } from '../../components/sectionWrapper/SectionWrapper'
import { theme } from '../../style'
import * as S from "./Contact.styled"

type ContactProps = {
}

export const Contact = ({}: ContactProps) => {
  return (
    <SectionWrapper backgroundColor={theme.color.darkGrey} textColor={theme.color.white} title='Contact'>Contact</SectionWrapper>
  )
}
