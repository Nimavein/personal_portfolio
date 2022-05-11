import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterWrapper = styled(motion.footer)`
  width: 100%;
  background-color: ${({ theme }) => theme.color.darkBlue};
  color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  padding-top: 20px;
`;

export const CopyrightText = styled.p`
  margin-top: 20px;
  color: ${({ theme }) => theme.color.white};
`;

export const Year = styled.span`
  margin-left: 6px;
  color: ${({ theme }) => theme.color.primary};
`;
