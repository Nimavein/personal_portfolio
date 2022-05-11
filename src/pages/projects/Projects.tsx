import { SectionWrapper } from "../../components/sectionWrapper/SectionWrapper";
import { theme } from "../../style";
import * as S from "./Projects.styled";
import { projects, ProjectType } from "../../helpers/projects";
import { Project } from "./project/Project";
import { Button } from "../../components/button/Button";
import { LazyLoadComponent } from "react-lazy-load-image-component";

export const Projects = () => {
  return (
    <SectionWrapper backgroundColor={theme.color.greyLight} title="Projects">
      <S.ProjectsWrapper>
        {projects.map((project: ProjectType) => (
          <LazyLoadComponent>
            <Project key={project.name} {...project} />
          </LazyLoadComponent>
        ))}
      </S.ProjectsWrapper>
      <S.LinkWrapper href="https://github.com/Nimavein" target="_blank">
        <Button type="button" isBlack>
          SEE MORE
        </Button>
      </S.LinkWrapper>
    </SectionWrapper>
  );
};
