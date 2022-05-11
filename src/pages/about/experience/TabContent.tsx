import * as S from "../About.styled";

type TabContentProps = {
  date: string;
  description: string;
};
export const TabContent = ({ date, description }: TabContentProps) => {
  return <>
  <S.ExperienceDate>{date}</S.ExperienceDate>
  <S.Description>{description}</S.Description>
  </>;
};
