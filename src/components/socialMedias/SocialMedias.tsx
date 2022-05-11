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
            <S.IconWrapper
              whileHover={{
                scale: 1.1,
                translateY: "-4px",
                transition: {
                  duration: 0.4,
                },
              }}
            >
              {social.icon}
            </S.IconWrapper>
          </S.LinkWrapper>
        ))}
      </S.SocialMediaIconsWrapper>
    </S.SocialMediasWrapper>
  );
};
