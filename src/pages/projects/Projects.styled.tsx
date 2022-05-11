import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;

  @media ${({ theme }) => theme.medias.medium} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.medias.mobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const LinkWrapper = styled.a`
  align-self: center;
  width: fit-content;
`;
