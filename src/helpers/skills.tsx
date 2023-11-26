import { FaSass, FaReact, FaLess } from "react-icons/fa";
import { IoAccessibility } from "react-icons/io5";
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
  SiSwr,
  SiFigma,
  SiJquery,
  SiJest,
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
    name: "JQuery",
    icon: <SiJquery />,
  },
  {
    name: "Redux",
    icon: <SiRedux />,
  },
  {
    name: "SWR",
    icon: <SiSwr />,
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
    name: "Jest",
    icon: <SiJest />,
  },
  {
    name: "Sass",
    icon: <FaSass />,
  },
  {
    name: "Less",
    icon: <FaLess />,
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
  {
    name: "Figma",
    icon: <SiFigma />,
  },
  {
    name: "Accessibility",
    icon: <IoAccessibility />,
  },
];
