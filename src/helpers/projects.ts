export type ProjectType = {
  name: string;
  imgUrl?: string;
  siteLink: string;
  githubLink?: string;
};

export const projects: ProjectType[] = [
  {
    name: "ikss website",
    imgUrl: "/ikss.png",
    siteLink: "https://master-program-ikss-a.vercel.app/",
    githubLink: "https://github.com/masterborn/master-program-ikss-a",
  },
  {
    name: "Filmweb clone",
    imgUrl: "/filmweb-clone.png",
    siteLink: "https://filmweb-clone.vercel.app/movies",
    githubLink: "https://github.com/Nimavein/filmweb-clone",
  },
  {
    name: "Store",
    imgUrl: "/store.png",
    siteLink: "https://keen-tereshkova-0d5eb5.netlify.app/",
    githubLink: "https://github.com/Nimavein/fake-store",
  },
  {
    name: "Portfolio",
    imgUrl: "/portfolio.png",
    siteLink: "https://michalzygiel.netlify.app/",
    githubLink: "https://github.com/Nimavein/personal_portfolio",
  },
  {
    name: "Exchanger",
    imgUrl: "/exchanger.png",
    siteLink: "https://inspiring-biscotti-d28d64.netlify.app/",
    githubLink: "https://github.com/Nimavein/exchanger",
  },
];
