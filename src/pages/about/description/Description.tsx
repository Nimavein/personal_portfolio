import { letter, sentence } from "../../../utils/animationsVariants";
import * as S from "../About.styled";
import { motion } from "framer-motion";
import { SocialMedias } from "../../../components/socialMedias/SocialMedias";

export const Description = () => {
  const header = "Who am I?";
  const description =
    "My name is Michał and I'm currently studying Social Informatics at AGH, where I've been able to develop my UX design, data analysis and frontend skills by creating a number of academic projects. During last year's summer break I had the opportunity to gain my first commercial experience as a Frontend Developer during an internship at Masterborn Software, allowing me to develop my skills in a more structured way. Since December, I have been a Junior Frontend Developer at Nextrope, which is a chance for me to learn more about the Fintech and Blockchain environment. I develop web applications by building the frontend and integrating it with the blockchain and backend using mainly ReactJS, JavaScipt, TypeScript and Redux. In my spare time I like to play piano, swim and watch psychological movies with unconventional endings.";
  return (
    <S.DescriptionWrapper>
      <S.DescriptionHeader
        variants={sentence}
        initial="hidden"
        animate="visible"
      >
        {header.split("").map((char: string, index: number) => {
          return (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </S.DescriptionHeader>

      <S.Description variants={sentence} initial="hidden" animate="visible">
        {description.split("").map((char: string, index: number) => {
          return (
            <motion.span key={`${char}-${index}`} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </S.Description>
      <SocialMedias />
    </S.DescriptionWrapper>
  );
};
