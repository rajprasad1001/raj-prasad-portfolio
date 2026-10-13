export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 70,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease,
    },
  },
};

export const scaleReveal = {
  hidden: {
    opacity: 0,
    scale: 0.82,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease,
    },
  },
};

export const blurReveal = {
  hidden: {
    opacity: 0,
    filter: "blur(15px)",
    y: 30,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      duration: 1,
      ease,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const slowStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};