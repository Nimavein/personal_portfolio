import { motion } from "framer-motion";
import styled from "styled-components";

export const FooterWrapper = styled(motion.footer)`
    width: 100%;
    background-color: ${({ theme }) => theme.color.darkBlue};
    height: 300px;
    color: ${({ theme }) => theme.color.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`