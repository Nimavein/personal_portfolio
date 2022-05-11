import { motion } from "framer-motion";
import styled from "styled-components";

export const PageWrapper = styled(motion.section)<{
  $backgroundColor?: string;
  $textColor?: string;
}>`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  color: ${({ $textColor, theme }) => $textColor || theme.color.black};
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor || theme.color.greyLight};
  border-top: 1px solid ${({ theme }) => theme.color.primary};
  @media ${({ theme }) => theme.medias.mobile} {
    padding: 40px 20px;
  }
`;

export const Title = styled.p<{ $textColor?: string }>`
  margin-bottom: 20px;
  font-size: 36px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: ${({ $textColor, theme }) => $textColor || theme.color.black};

  @media ${({ theme }) => theme.medias.mobile} {
    font-size: 26px;
    margin-bottom: 14px;
  }
`;

export const Separator = styled.hr<{ $textColor?: string }>`
  width: 50px;
  border: 2px solid
    ${({ $textColor, theme }) => $textColor || theme.color.black};
  margin: 0 auto 46px auto;
`;
