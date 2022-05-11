import { SectionWrapper } from "../../components/sectionWrapper/SectionWrapper";
import { theme } from "../../style";
import * as S from "./Projects.styled";
import { projects, ProjectType } from "../../helpers/projects";
import { Project } from "./project/Project";
import { Button } from "../../components/button/Button";

type ProjectsProps = {};

export const Projects = ({}: ProjectsProps) => {
  return (
    <SectionWrapper backgroundColor={theme.color.greyLight} title="Projects">
      <S.ProjectsWrapper>
        {projects.map((project: ProjectType) => (
          <Project key={project.name} {...project} />
        ))}
      </S.ProjectsWrapper>
      <S.LinkWrapper href="https://github.com/Nimavein" target="_blank">
        <Button isBlack> SEE MORE </Button>
      </S.LinkWrapper>
    </SectionWrapper>
  );
};
