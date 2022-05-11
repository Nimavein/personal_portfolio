import { motion } from "framer-motion";
import styled from "styled-components";

export const ProjectWrapper = styled(motion.div)`
  width: 100%;
  box-shadow: 3px 4px 16px rgba(0, 0, 0, 0.21);
  position: relative;
`;

export const ProjectImage = styled(motion.img)`
  width: 100%;
  height: 100%;
`;

export const TitleWrapper = styled(motion.div)`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.darkBlue};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinksWrapper = styled(motion.div)`
  text-align: center;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.darkBlue};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  gap: 20px;
`;

export const LinkWrapper = styled(motion.a)`
  align-self: center;
  width: fit-content;
`;

export const TitlePressWrapper = styled(TitleWrapper)`
  height: 50%;
  opacity: 0.9;
`;

export const LinksPressWrapper = styled(LinksWrapper)`
  height: 50%;
  opacity: 0.9;
  z-index: 20;
`;
export const LinkPressWrapper = styled(LinkWrapper)``;
