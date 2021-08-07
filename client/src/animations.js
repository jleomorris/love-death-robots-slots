export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: -300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      //   staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    // y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const projectBannerAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    // y: 300,
    transition: {
      duration: 0.5,
    },
  },
};

export const halfWidth = (delay) => ({
  hidden: { width: '100%' },
  show: {
    width: '70%',
    transition: { duration: 0.75, ease: 'easeOut', delay: delay },
  },
  showTablet: {
    width: '100%',
    transition: { duration: 0.75, ease: 'easeOut', delay: delay },
  },
});

export const slideUp = (delay) => ({
  hidden: { y: 200, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut', delay: delay },
  },
});

export const allEpisodesSlideUp = (delay) => ({
  hidden: { y: '50%', x: '-50%', opacity: 0 },
  show: {
    y: '-50%',
    x: '-50%',
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut', delay: delay },
  },
  showTabletMobile: {
    y: '-35%',
    x: '-50%',
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut', delay: delay },
  },
});

export const slideDown = (delay) => ({
  hidden: { y: 0, opacity: 1 },
  show: {
    y: 80,
    opacity: 0.2,
    transition: { duration: 0.75, ease: 'easeOut', delay: delay },
  },
});

export const fadeIn = {
  animate: {
    opacity: [0, 0.25, 0.5, 0.75, 1],
    transition: { duration: 6, ease: 'easeOut' },
  },
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const fadeOut = (delay) => ({
  hidden: { opacity: 1 },
  show: {
    opacity: 0,
    transition: { duration: 1, ease: 'easeOut', delay: delay },
  },
});

export const photoAnimation = {
  hidden: { scale: 1.5, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const lineAnimation = {
  hidden: { width: '0%' },
  show: { width: '100%', transition: { duration: 1.5 } },
};

export const sliderAnimation = {
  hidden: { x: '-130%', skew: '45deg' },
  show: {
    x: '100%',
    skew: '0deg',
    transition: { duration: 0.75, ease: 'easeOut' },
  },
};

export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
};

export const enterRight = (delay) => ({
  hidden: { opacity: 0, x: '100%', transition: { duration: 0.1 } },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut', delay: delay },
  },
  exit: {
    opacity: 0,
    x: '-200%',
    transition: {
      duration: 0.5,
    },
  },
});

export const leaveLeft = {
  hidden: (isEpisodeGenerated) => ({
    opacity: isEpisodeGenerated ? 0 : 1,
    x: isEpisodeGenerated ? '-20%' : 0,
    transition: { duration: 0.5 },
  }),
  show: {
    opacity: 0,
    x: '-20%',
    transition: { duration: 1, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    x: '-200%',
    transition: {
      duration: 2,
      delay: 2,
    },
  },
};

export const scrollRevealLeft = {
  hidden: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

export const rotatingAnimation = {
  hidden: { scale: 0.8, opacity: 0, rotate: 40 },
  show: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};
