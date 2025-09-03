// Animation constants for the hero section and other components

export const floatingAnimation = {
  y: ['-10%', '10%'],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: 'reverse' as const,
    ease: 'easeInOut',
  },
};

export const pulseAnimation = {
  scale: [1, 1.1, 1],
  opacity: [0.3, 0.6, 0.3],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

export const rotateAnimation = {
  rotate: [0, 360],
  transition: {
    duration: 20,
    repeat: Infinity,
    ease: 'linear',
  },
};
