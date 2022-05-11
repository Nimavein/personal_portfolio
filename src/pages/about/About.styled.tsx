import { motion } from "framer-motion";
import styled from "styled-components";

export const ColumnsWrapper = styled(motion.div)`
  display: flex;
  gap: 20px;
  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
  }
`;
export const SkillsWrapper = styled.div``;
export const ExperienceWrapper = styled.div`
  .ant-tabs {
    background: ${({ theme }) => theme.color.darkGrey};
    color: ${({ theme }) => theme.color.white};
    padding: 26px;
    .ant-tabs-tab:hover,
    .ant-tabs-tab-btn:focus,
    .ant-tabs-tab-remove:focus,
    .ant-tabs-tab-btn:active,
    .ant-tabs-tab-btn:hover,
    .ant-tabs-tab-remove:active,
    .ant-tabs-tab-remove:hover {
      color: ${({ theme }) => theme.color.secondary};
    }
      .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

export const DescriptionHeader = styled(motion.h3)`
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
  color: ${({ theme }) => theme.color.darkGrey};
`;
export const Description = styled(motion.p)``;

export const LeftColumn = styled(motion.div)`
  width: 50%;
  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;
export const RightColumn = styled(LeftColumn)``;

export const ExperienceDescription = styled.p``
export const ExperienceDate = styled.p`
  color: ${({ theme }) => theme.color.greyLight};
  margin-bottom: 12px;

`
export const UsedSkills = styled.div``