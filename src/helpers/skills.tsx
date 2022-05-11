import { FaSass, FaReact } from "react-icons/fa";
import {
  SiRedux,
  SiCss3,
  SiGit,
  SiHtml5,
  SiJira,
  SiTypescript,
  SiJavascript,
  SiBootstrap,
  SiStyledcomponents,
  SiNextdotjs,
} from "react-icons/si";

export type SkillType = {
  name: string;
  icon: any;
};

export const skills: SkillType[] = [
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "CSS3",
    icon: <SiCss3 />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "Styled Components",
    icon: <SiStyledcomponents />,
  },
  {
    name: "Sass",
    icon: <FaSass />,
  },
  {
    name: "Git",
    icon: <SiGit />,
  },
  {
    name: "HTML5",
    icon: <SiHtml5 />,
  },
  {
    name: "Jira",
    icon: <SiJira />,
  },
];
