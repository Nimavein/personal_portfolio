import { useState } from "react";
import { Button } from "../../../components/button/Button";
import { ProjectType } from "../../../helpers/projects";
import useMediaQuery from "../../../hooks/useMediaQuery";
import * as S from "./Project.styled";

export const Project = ({
  imgUrl,
  name,
  siteLink,
  githubLink,
}: ProjectType) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const slashMotion = {
    rest: {
      opacity: 0,
      ease: "easeOut",
      duration: 0.2,
      type: "tween",
      height: 0,
    },
    hover: {
      opacity: 0.9,
      height: "50%",
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeIn",
      },
    },
  };
  const onClick = () => console.log("x");

  const onTap = () => {
    setIsVisible(!isVisible);
  };

  return (
    <S.ProjectWrapper initial="rest" whileHover="hover" animate="rest">
      {isVisible && isMobile ? (
        <>
          <S.TitlePressWrapper onTap={onTap}>{name}</S.TitlePressWrapper>
          <S.LinksPressWrapper>
            <S.LinkPressWrapper target="_blank" href={siteLink}>
              <Button>LIVE</Button>
            </S.LinkPressWrapper>
            <S.LinkPressWrapper target="_blank" href={githubLink}>
              <Button>CODE</Button>
            </S.LinkPressWrapper>
          </S.LinksPressWrapper>
        </>
      ) : (
        <>
          <S.TitleWrapper variants={slashMotion}>{name}</S.TitleWrapper>
          <S.LinksWrapper variants={slashMotion}>
            <S.LinkWrapper target="_blank" href={siteLink}>
              <Button onClick={onClick}>LIVE</Button>
            </S.LinkWrapper>
            <S.LinkWrapper target="_blank" href={githubLink}>
              <Button>CODE</Button>
            </S.LinkWrapper>
          </S.LinksWrapper>
        </>
      )}

      <S.ProjectImage onTap={onTap} src={imgUrl} alt={name}></S.ProjectImage>
    </S.ProjectWrapper>
  );
};
