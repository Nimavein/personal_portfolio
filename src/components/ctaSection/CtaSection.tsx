import { Link } from "react-scroll"
import { Button } from "../button/Button"
import * as S from "./CtaSection.styled"

export const CtaSection = () => {
  return (
    <S.CtaWrapper>
      <S.CtaText>Do you want to talk about ...</S.CtaText>
      <Link to="Contact" spy={true} smooth={true}>
      <Button>Contact me!</Button>
      </Link>
    </S.CtaWrapper>
  )
}
