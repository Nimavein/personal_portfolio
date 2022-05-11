import { MediaType, socialMedias } from "../../helpers/socialMedias";
import * as S from "./SocialMedias.styled";

type SocialMediasProps = {
  displayTitle?: boolean;
};

export const SocialMedias = ({ displayTitle }: SocialMediasProps) => {
  return (
    <S.SocialMediasWrapper>
      {displayTitle && (
        <S.SocialMediasTitle>You can find me here!</S.SocialMediasTitle>
      )}
      <S.SocialMediaIconsWrapper>
        {socialMedias.map((social: MediaType) => (
          <S.LinkWrapper key={social.name} href={social.url}>
            {social.icon}
          </S.LinkWrapper>
        ))}
      </S.SocialMediaIconsWrapper>
    </S.SocialMediasWrapper>
  );
};
