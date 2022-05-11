import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionsWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 46px;
  @media ${({ theme }) => theme.medias.mobile} {
    gap: 20px;
  }
`;

export const TopSection = styled(motion.div)`
  width: 100%;
  display: flex;
  gap: 20px;

  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
  }
`;
export const BottomSection = styled(TopSection)``;

export const ImageWrapper = styled.div`
  height: 300px;
  width: 50%;
  background-color: ${({ theme }) => theme.color.darkGrey};
  border-radius: 50%;
  align-self: center;
  margin-bottom: 36px;
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;

export const DescriptionWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.darkGrey};
  color: ${({ theme }) => theme.color.white};
  padding: 40px;
  width: 50%;

  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    padding: 26px;
  }
`;

export const DescriptionHeader = styled(motion.h3)`
  color: ${({ theme }) => theme.color.white};
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
  letter-spacing: 0.05em;
`;
export const Description = styled(motion.p)``;

export const SkillsWrapper = styled(DescriptionWrapper)``;
export const ExperienceWrapper = styled(DescriptionWrapper)`
  .ant-tabs {
    background: ${({ theme }) => theme.color.darkGrey};
    color: ${({ theme }) => theme.color.white};
    padding: 20px 0;
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

export const ExperienceDescription = styled.p``;
export const ExperienceDate = styled.p`
  color: ${({ theme }) => theme.color.greyLight};
  margin-bottom: 12px;
`;
export const UsedSkills = styled.div``;
