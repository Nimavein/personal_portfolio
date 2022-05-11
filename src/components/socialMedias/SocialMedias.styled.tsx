import { motion } from "framer-motion";
import styled from "styled-components";

export const SocialMediasWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
  color: ${({ theme }) => theme.color.white};
  flex-direction: column;
  @media ${({ theme }) => theme.medias.mobile} {
    align-items: center;
  }
`;

export const SocialMediasTitle = styled.p`
  display: flex;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: 600;
`;

export const SocialMediaIconsWrapper = styled.div`
  display: flex;
  gap: 30px;
`;

export const IconWrapper = styled(motion.div)``;

export const LinkWrapper = styled.a`
  align-self: center;
  width: fit-content;
  font-size: 30px;
  svg {
    color: ${({ theme }) => theme.color.white};
    transition: all ease-in-out 0.3s;
  }
  &:hover {
    svg {
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;
