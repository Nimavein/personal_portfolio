import { TabContent } from "../pages/about/experience/TabContent";

export const experience = [
  {
    key: "1",
    name: "Nextrope",
    component: (
      <TabContent
        position="Junior Frontend Developer"
        description="Learned more about the Fintech and Blockchain environment. Developed web applications by
building the frontend and integrating it with the blockchain and backend using mainly ReactJS,
JavaScipt, TypeScript and Redux."
        date="12.2021 - present"
      />
    ),
  },
  {
    key: "2",
    name: "MasterBorn",
    component: (
      <TabContent
        position="Intern Frontend Developer"
        description="Created a fully responsive website for student organisation IKSS using NextJS and Contentful API
working in an agile environment."
        date="09.2021 - 10.2021"
      />
    ),
  },
];
