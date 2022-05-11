import { motion } from "framer-motion";
import styled from "styled-components";

export const CtaWrapper = styled(motion.section)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.darkGrey};
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
`;

export const CtaText = styled.p`
  font-size: 22px;
  color: ${({ theme }) => theme.color.white};
`;