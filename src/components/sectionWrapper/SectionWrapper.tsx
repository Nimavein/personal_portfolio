import { HTMLAttributes } from "react";
import * as S from "./SectionWrapper.styled";

type SectionWrapperProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string
};

export const SectionWrapper = ({
  title,
  children,
  backgroundColor,
  textColor
}: SectionWrapperProps & HTMLAttributes<HTMLDivElement>) => (
  <S.PageWrapper
    $backgroundColor={backgroundColor}
    id={title}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <S.Title $textColor={textColor}>{title}</S.Title>
    <S.Separator $textColor={textColor} />
    {children}
  </S.PageWrapper>
);
