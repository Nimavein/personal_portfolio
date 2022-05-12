import { useAnimation } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import useMediaQuery from "../../hooks/useMediaQuery";
import * as S from "./Navbar.styled";

const sections: string[] = ["Home", "About", "Projects", "Contact"];

export const Navbar = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const animationControl = useAnimation();
  const { inView, ref } = useInView();

  if (inView) {
    animationControl.start({
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 0.5,
      },
    });
  }

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%", height: 0 },
  };

  const toogleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <S.NavbarWrapper
      ref={ref}
      initial={{
        opacity: 0,
      }}
      animate={animationControl}
    >
      <S.LinksWrapper>
        {!isMobile ? (
          <>
            {sections.map((section: string) => (
              <S.Link key={section} to={section} spy={true} smooth={true}>
                {section}
              </S.Link>
            ))}
          </>
        ) : (
          <>
            <S.HamburgerIcon onClick={toogleVisibility} />
            <S.MobileLinksWrapper
              isVisible={isVisible}
              animate={isVisible ? "open" : "closed"}
              variants={variants}
            >
              {isVisible && (
                <>
                  {sections.map((section: string) => (
                    <S.Link
                      onClick={toogleVisibility}
                      key={section}
                      to={section}
                      spy={true}
                      smooth={true}
                    >
                      {section}
                    </S.Link>
                  ))}
                </>
              )}
            </S.MobileLinksWrapper>
          </>
        )}
      </S.LinksWrapper>
    </S.NavbarWrapper>
  );
};
