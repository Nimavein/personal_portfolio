import {
  FacebookFilled,
  GithubFilled,
  LinkedinFilled,
} from "@ant-design/icons";

export type MediaType = {
  name: string;
  url: string;
  icon?: any;
};

export const socialMedias: MediaType[] = [
  {
    name: "Github",
    url: "https://github.com/Nimavein",
    icon: <GithubFilled />,
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/micha%C5%82-%C5%BCygiel-024023214/",
    icon: <LinkedinFilled />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100005705885713",
    icon: <FacebookFilled />,
  },
];
