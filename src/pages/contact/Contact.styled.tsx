import styled from "styled-components";

export const ContactFormWrapper = styled.section`
  width: 60%;
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
  }
`;

export const ContactWrapper = styled.section`
  display: flex;
  gap: 80px;
  @media ${({ theme }) => theme.medias.mobile} {
    flex-direction: column;
    gap: 40px;
  }
`;

export const StyledContactForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const NameAndMail = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

export const Name = styled.input`
  width: 50%;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  height: 30px;
  color: ${({ theme }) => theme.color.black};
  text-indent: 8px;
  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }
`;
export const Mail = styled(Name)``;
export const Message = styled.textarea`
  width: 100%;
  height: 120px;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  color: ${({ theme }) => theme.color.black};
  text-indent: 8px;
  padding-top: 8px;
  margin-bottom: 16px;
  &:focus {
    outline-style: none;
    box-shadow: none;
    border-color: transparent;
  }
`;

export const ContactMeText = styled.p`
  color: ${({ theme }) => theme.color.white};
  font-weight: 600;
  text-align: start;
  margin-bottom: 12px;
  font-size: 18px;
  text-transform: uppercase;
`;

export const FormDivider = styled.hr`
  border: 1px solid ${({ theme }) => theme.color.primary};
  width: 120px;
  margin: 12px 0;
`;

export const ContactMethods = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  @media ${({ theme }) => theme.medias.mobile} {
    width: 100%;
    align-items: center;
  }
`;

export const MethodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media ${({ theme }) => theme.medias.mobile} {
    align-items: center;
  }
`;

export const IconWithMethodName = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  span {
    color: ${({ theme }) => theme.color.white};
    font-size: 36px;
  }
`;

export const MethodName = styled.p`
  color: ${({ theme }) => theme.color.secondary};
  font-size: 20px;
`;

export const Email = styled.a`
  color: ${({ theme }) => theme.color.white};
  font-size: 18px;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const Phone = styled(Email)``;
