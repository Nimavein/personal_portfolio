import styled from "styled-components";
import { Link as ReactScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

export const NavbarWrapper = styled(motion.nav)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.color.darkBlue};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 2px solid ${({ theme }) => theme.color.primary};
  box-shadow: ${({ theme }) => theme.color.boxShadow};
  padding: 20px 20px;
`;

export const Link = styled(ReactScrollLink)`
  transition: all ease-in-out 0.4s;
  text-transform: uppercase;
  letter-spacing: 0.1;
  color: ${({ theme }) => theme.color.white};

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const MobileLink = styled(Link)<{ isVisible?: boolean }>`
  display: ${({ isVisible }) => (isVisible ? "visible" : "none")};
`;

export const LinksWrapper = styled(motion.div)`
  display: flex;
  gap: 20px;
  align-items: center;

  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
    gap: 0;
  }
`;

export const MobileLinksWrapper = styled(motion.div)<{ isVisible: boolean }>`
  margin-top: ${({ isVisible }) => (isVisible ? "20px" : 0)};
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
`;

export const HamburgerIcon = styled(GiHamburgerMenu)`
  color: ${({ theme }) => theme.color.white};
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;
