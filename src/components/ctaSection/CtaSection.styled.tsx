import { motion } from "framer-motion";
import styled from "styled-components";

export const CtaWrapper = styled(motion.section)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.darkGrey};
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.color.primary};
  border-bottom: 1px solid ${({ theme }) => theme.color.primary};
`;

export const CtaText = styled.p`
  font-size: 24px;
  line-height: 34px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  @media ${({ theme }) => theme.medias.mobile} {
    line-height: 30px;
    font-size: 22px;
  }
`;
