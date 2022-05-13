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
  border-radius: 20px;
  width: 50%;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;

export const Avatar = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const DescriptionWrapper = styled.div`
  border-radius: 20px;
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
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 0.05em;
`;
export const Description = styled(motion.p)`
  line-height: 20px;
`;

export const SkillsWrapper = styled(DescriptionWrapper)``;

export const SkillsIconsWrapper = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const SkillName = styled(motion.p)`
  line-height: 20px;
`;

export const IconWrapper = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  svg {
    color: ${({ theme }) => theme.color.white};
    transition: all ease-in-out 0.3s;
    font-size: 30px;
  }
  &:hover {
    cursor: default;
    color: ${({ theme }) => theme.color.primary};

    svg {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;

export const ExperienceWrapper = styled(DescriptionWrapper)`
  .ant-tabs {
    background: ${({ theme }) => theme.color.darkGrey};
    color: ${({ theme }) => theme.color.white};
    padding: 20px 0;
    .ant-tabs-ink-bar {
      background: ${({ theme }) => theme.color.secondary};
    }

    .ant-tabs-tab {
      font-weight: 600;
    }
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
export const ExperiencePosition = styled.p`
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 10px;
`;
export const ExperienceDate = styled.p`
  font-weight: 600;
  color: ${({ theme }) => theme.color.greyLight};
  margin-bottom: 12px;
`;
export const UsedSkills = styled.div``;
