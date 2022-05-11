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
    name: "Store",
    imgUrl: "/store.png",
    siteLink: "https://keen-tereshkova-0d5eb5.netlify.app/",
    githubLink: "https://github.com/Nimavein/fake-store",
  },
  {
    name: "Portfolio",
    imgUrl: "/portfolio.png",
    siteLink: "https://main--gregarious-chebakia-eb84f9.netlify.app/",
    githubLink: "https://github.com/masterborn/master-program-ikss-a",
  },
  {
    name: "Spacex",
    imgUrl: "/spacex.png",
    siteLink: "https://peaceful-tesla-31b089.netlify.app/",
    githubLink: "https://github.com/Nimavein/spacex",
  },

  {
    name: "Exchanger",
    imgUrl: "/exchanger.png",
    siteLink: "https://inspiring-biscotti-d28d64.netlify.app/",
    githubLink: "https://github.com/Nimavein/exchanger",
  },
];
