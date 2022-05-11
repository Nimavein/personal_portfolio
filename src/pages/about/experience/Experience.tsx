import * as S from "../About.styled";
import { Tabs } from "antd";
import { TabContent } from "./TabContent";

const { TabPane } = Tabs;
export const Experience = () => {
  const content = [
    {
      key: "1",
      name: "Nextrope",
      component: (
        <TabContent
          description="Learned more about the Fintech and Blockchain environment. Developed web applications by
building the frontend and integrating it with the blockchain and backend using mainly ReactJS,
JavaScipt, TypeScript and Redux."
          date="12.2021 - current"
        />
      ),
    },
    {
      key: "2",
      name: "MasterBorn",
      component: (
        <TabContent
          description="Created a fully responsive website for student organisation IKSS using NextJS and Contentful API
working in an agile environment. Link to the application in the portfolio."
          date="09.2021 - 10.2021"
        />
      ),
    },
  ];

  return (
    <S.ExperienceWrapper>
      <S.DescriptionHeader>Experience</S.DescriptionHeader>
      <Tabs tabPosition="left">
        {content.map((tab) => (
          <TabPane key={tab.key} tab={tab.name}>
            {tab.component}
          </TabPane>
        ))}
      </Tabs>
    </S.ExperienceWrapper>
  );
};
