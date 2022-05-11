import * as S from "../About.styled";

type TabContentProps = {
  date: string;
  description: string;
  position: string;
};
export const TabContent = ({
  date,
  description,
  position,
}: TabContentProps) => {
  return (
    <>
      <S.ExperiencePosition>{position}</S.ExperiencePosition>
      <S.ExperienceDate>{date}</S.ExperienceDate>
      <S.Description>{description}</S.Description>
    </>
  );
};
