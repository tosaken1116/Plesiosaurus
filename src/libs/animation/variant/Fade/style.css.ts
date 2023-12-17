import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const fadeInKeyframe = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
})

const fadeOutKeyframe = keyframes({
  '0%': {
    opacity: 1,
  },
  '100%': {
    opacity: 0,
  },
})

export const hoverFadeAnimation = recipe({
  base: {
    animationDuration: 'var(--animation-duration)',
    animationDelay: 'var(--animation-delay)',
  },
  variants: {
    fade: {
      in: {
        ':hover': {
          animationName: fadeInKeyframe,
        },
      },
      out: {
        ':hover': {
          animationName: fadeOutKeyframe,
        },
      },
    },
  },
})

export const fadeAnimation = recipe({
  base: {
    animationDuration: 'var(--animation-duration)',
    animationDelay: 'var(--animation-delay)',
  },
  variants: {
    fade: {
      in: {
        animationName: fadeInKeyframe,
      },
      out: {
        animationName: fadeOutKeyframe,
      },
    },
  },
})
