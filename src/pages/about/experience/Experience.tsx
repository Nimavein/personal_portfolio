import * as S from "../About.styled";
import { Tabs } from "antd";
import { experience } from "../../../helpers/experience";

const { TabPane } = Tabs;

export const Experience = () => {
  return (
    <S.ExperienceWrapper>
      <S.DescriptionHeader>Experience</S.DescriptionHeader>
      <Tabs tabPosition="left">
        {experience.map((tab) => (
          <TabPane key={tab.key} tab={tab.name}>
            {tab.component}
          </TabPane>
        ))}
      </Tabs>
    </S.ExperienceWrapper>
  );
};
