import { SectionWrapper } from "../../components/sectionWrapper/SectionWrapper";
import { theme } from "../../style";
import * as S from "./Contact.styled";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "../../components/button/Button";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { SocialMedias } from "../../components/socialMedias/SocialMedias";
import axios from "axios";
import { toast } from "react-toastify";

type FormDataType = {
  name: string;
  message: string;
  email: string;
};

export const Contact = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<FormDataType>();

  useEffect(() => {
    let submitSuccessfulTimer = setTimeout(
      () => setIsSubmitSuccessful(false),
      4000
    );
    return () => {
      clearTimeout(submitSuccessfulTimer);
    };
  }, [isSubmitSuccessful]);

  const onSubmit = async (data: FormDataType) => {
    try {
      await axios.post("https://formcarry.com/s/EdpXmCxaz8A", {
        name: data.name,
        email: data.email,
        message: data.message,
      });
      toast.success("You have successfully send a message!");
      setIsSubmitSuccessful(true);
      reset();
    } catch (e: any) {
      toast.error(e);
    }
  };

  return (
    <SectionWrapper
      backgroundColor={theme.color.darkGrey}
      textColor={theme.color.white}
      title="Contact"
    >
      <S.ContactWrapper>
        <S.ContactFormWrapper>
          <S.ContactMeText>Contact Me!</S.ContactMeText>
          <S.FormDivider />
          <S.StyledContactForm onSubmit={handleSubmit(onSubmit)}>
            <S.NameAndMail>
              <S.Name
                placeholder="Enter your name"
                {...register("name")}
                required
              />
              <S.Mail
                placeholder="Enter your e-mail"
                type="email"
                {...register("email")}
                required
                name="email"
              />
            </S.NameAndMail>
            <S.Message
              placeholder="Enter your message..."
              {...register("message")}
              name="message"
              required
            />
            <Button type="submit">
              {isSubmitSuccessful ? "Message Sent" : "Send"}
            </Button>
          </S.StyledContactForm>
        </S.ContactFormWrapper>
        <S.ContactMethods>
          <S.MethodWrapper>
            <S.IconWithMethodName>
              <MailOutlined /> <S.MethodName>E-mail</S.MethodName>
            </S.IconWithMethodName>
            <S.Email href="mailto:michalzygiel00@gmail.com">
              michalzygiel00@gmail.com
            </S.Email>
          </S.MethodWrapper>
          <S.MethodWrapper>
            <S.IconWithMethodName>
              <PhoneOutlined /> <S.MethodName>Phone</S.MethodName>
            </S.IconWithMethodName>
            <S.Phone href="tel:664-145-259">+48 664 145 259</S.Phone>
          </S.MethodWrapper>
          <SocialMedias displayTitle />
        </S.ContactMethods>
      </S.ContactWrapper>
    </SectionWrapper>
  );
};
