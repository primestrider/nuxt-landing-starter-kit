export const useMotionPresets = () => {
  const spring = { type: "spring" as const, stiffness: 260, damping: 22 };

  const fadeUp = {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  };

  const fadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45 },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.92 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-60px" },
    transition: spring,
  };

  const slideInRight = {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  };

  const staggerContainer = {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-80px" },
    variants: {
      hidden: {},
      visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.05 },
      },
    },
  };

  const staggerItem = {
    variants: {
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
      },
    },
  };

  const pageTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -8 },
    transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
  };

  const hoverLift = {
    whileHover: { y: -6, scale: 1.02 },
    whilePress: { scale: 0.98 },
    transition: spring,
  };

  const float = {
    animate: { y: [0, -10, 0] },
    transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const },
  };

  return {
    spring,
    fadeUp,
    fadeIn,
    scaleIn,
    slideInRight,
    staggerContainer,
    staggerItem,
    pageTransition,
    hoverLift,
    float,
  };
};
