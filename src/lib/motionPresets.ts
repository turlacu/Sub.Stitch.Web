export const smoothRevealEase = [0.16, 1, 0.3, 1] as const;

export const revealViewport = {
  once: true,
  amount: 0.18,
  margin: "0px 0px -8% 0px"
} as const;

export const smoothRevealTransition = (delay = 0) => ({
  duration: 0.72,
  delay,
  ease: smoothRevealEase
});

export const smoothItemTransition = (delay = 0) => ({
  duration: 0.64,
  delay,
  ease: smoothRevealEase
});
