export const fadeIn = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { ease: "easeInOut", delay: 1.5 },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { ease: "easeInOut", delay: 3 },
  },
};

export const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 4,
      staggerChildren: 0.02,
    },
  },
};

export const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};
