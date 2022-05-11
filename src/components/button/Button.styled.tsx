import styled from "styled-components";

export const Button = styled.button<{ $isBlack?: boolean }>`
  padding: 6px 42px;
  color: ${({ $isBlack, theme }) =>
    $isBlack ? theme.color.white : theme.color.black};
  position: relative;
  background: ${({ $isBlack, theme }) =>
    $isBlack ? theme.color.black : theme.color.white};
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease-in 1.2s;

  &:hover {
    background: transparent;
    color: ${({ $isBlack, theme }) =>
      $isBlack ? theme.color.black : theme.color.white};
    transition: all 0.3s ease-in;
  }

  .bot-bar {
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 0%;
    left: 0px;
    background: ${({ $isBlack, theme }) =>
      $isBlack ? theme.color.black : theme.color.white};
    transition: all 0.4s ease 0.8s;
  }

  .top-bar {
    height: 2px;
    width: 0%;
    position: absolute;
    top: 0px;
    right: 0px;
    background: ${({ $isBlack, theme }) =>
      $isBlack ? theme.color.black : theme.color.white};
    transition: all 0.4s ease 0.2s;
  }

  .left-bar {
    height: 0%;
    width: 2px;
    background: ${({ $isBlack, theme }) =>
      $isBlack ? theme.color.black : theme.color.white};
    position: absolute;
    left: 0px;
    top: 0px;
    transition: all 0.2s ease;
  }

  .right-bar {
    height: 0%;
    width: 2px;
    background: ${({ $isBlack, theme }) =>
      $isBlack ? theme.color.black : theme.color.white};
    position: absolute;
    right: 0px;
    bottom: 0px;
    transition: all 0.2s ease 0.6s;
  }

  &:hover .bot-bar {
    width: 100%;
    transition: all 0.4s ease-in-out;
  }

  &:hover .top-bar {
    width: 100%;
    transition: all 0.4s ease-in-out 0.6s;
  }

  &:hover .right-bar {
    height: 100%;
    transition: all 0.2s ease-in-out 0.4s;
  }

  &:hover .left-bar {
    height: 100%;
    transition: all 0.2s ease-in-out 1s;
  }
`;
