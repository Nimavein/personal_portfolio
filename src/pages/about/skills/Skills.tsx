import { skills, SkillType } from "../../../helpers/skills";
import * as S from "../About.styled";
export const Skills = () => {
  return (
    <>
      <S.SkillsWrapper>
        <S.DescriptionHeader>Skills</S.DescriptionHeader>
        <S.SkillsIconsWrapper>
          {skills.map((skill: SkillType) => (
            <S.IconWrapper
              key={skill.name}
              whileHover={{
                scale: 1.1,
                translateY: "-4px",
                transition: {
                  duration: 0.4,
                },
              }}
            >
              {skill.icon}
              <S.SkillName>{skill.name}</S.SkillName>
            </S.IconWrapper>
          ))}
        </S.SkillsIconsWrapper>
      </S.SkillsWrapper>
    </>
  );
};
