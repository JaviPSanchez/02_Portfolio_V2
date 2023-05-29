export const cardsWelcome = {
  hidden: {
    opacity: 0,
    y: -150,
    transition: {
      //   type: "spring",
      stiffness: 100,
      // damping: 40,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      //   type: "spring",
      stiffness: 200,
      delay: 0.5,
    },
  },
};
