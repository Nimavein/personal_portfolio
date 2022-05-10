import { SectionWrapper } from '../../components/sectionWrapper/SectionWrapper'
import { theme } from '../../style'
import * as S from "./Projects.styled"

type ProjectsProps = {
}

export const Projects = ({}: ProjectsProps) => {
  return (
    <SectionWrapper backgroundColor={theme.color.greyLight} title='Projects'>Projects</SectionWrapper>
  )
}
