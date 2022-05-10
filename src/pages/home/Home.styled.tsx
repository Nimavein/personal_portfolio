import styled from "styled-components";
import { Link as ReactScrollLink } from "react-scroll";

export const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 42px;
  flex-direction: column;
  gap: 20px;

  @media ${({ theme }) => theme.medias.mobile} {
    font-size: 26px;
  }
`;

export const IntroductionText = styled.p`
text-align: center;
  z-index: 2;

  color: ${({ theme }) => theme.color.white};
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.color.primary};
`;

export const Link = styled(ReactScrollLink)`
  position: absolute;
  bottom: 40px;
  transition: all ease-in-out 0.4s;
    &:hover {
      transform: translateY(20px);
    }
`
  
export const ScrollDownButton = styled.div`
  span {
    font-size: 80px;
    color: ${({ theme }) => theme.color.primary};
    
  }
`;
