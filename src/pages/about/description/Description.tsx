import { letter, sentence } from "../../../utils/animationsVariants";
import * as S from "../About.styled";
import { motion } from "framer-motion";
import { SocialMedias } from "../../../components/socialMedias/SocialMedias";

export const Description = () => {
  const header = "Who am I?";
  const description = `Michał is a front-end developer with an educational background in Social Informatics. During his studies, he became familiar with UX Design, Data Science and Web Design. This lead him to always ensure clear code and create eye-pleasing, accessible websites having in mind the end users and their needs. 

He gained his first professional experience during a summer internship at Masterborn Software, where he created a website for the student organization IKSS using Next.js. Then he worked at Nextrope, where he was responsible for creating the front end for blockchain applications in React, integrating it with smart contracts, and creating communication with the back end. At NoA Ignite, he is involved in the redesign of Matprat, the most popular cooking recipes website in Norway. This project has allowed him to expand his knowledge in the area of accessibility. Thanks to this remarkable experience, he has learned to develop solutions more consciously and inclusively and gained independency in his contact with clients.

Michał has experience working in fast-paced environments. He is very resilient and has excellent time management skills. He is also familiar with agile and can focus on the task at hand. Being a fan of automation and speeding the working process, he is very eager to learn and use new technologies. He has been putting much effort into learning React and would like to have more opportunities to work with Next.js.

Michał is conscientious, patient and honest. He values clear messages and mutual understanding with his clients and teammates. He appreciates receiving feedback and always finishes his tasks on time. He also strives for development and can easily learn from his mistakes. His colleagues appreciate working with him due to his strong commitment and friendly attitude.`;

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
