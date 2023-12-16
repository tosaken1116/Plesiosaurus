import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const LTRAnimation = keyframes({
  '0%': {
    transform: 'translateX(-100%)',
  },
  '80%': {
    transform: 'translateX(10%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
})

const RTLAnimation = keyframes({
  '0%': {
    transform: 'translateX(100%)',
  },
  '80%': {
    transform: 'translateX(-10%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
})

const TTBAnimation = keyframes({
  '0%': {
    transform: 'translateY(-100%)',
  },
  '80%': {
    transform: 'translateY(10%)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
})

const BTTAnimation = keyframes({
  '0%': {
    transform: 'translateY(100%)',
  },
  '80%': {
    transform: 'translateY(-10%)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
})

export const slideAnimation = recipe({
  base: {
    animationTimingFunction: 'ease-in-out',
    animationFillMode: 'forwards',
    animationDirection: 'normal',
    animationIterationCount: 1,
    animationDuration: 'var(--animation-duration)',
    animationDelay: 'var(--animation-delay)',
  },
  variants: {
    direction: {
      bottom: {
        animationName: BTTAnimation,
      },
      top: {
        animationName: TTBAnimation,
      },
      left: {
        animationName: RTLAnimation,
      },
      right: {
        animationName: LTRAnimation,
      },
    },
  },
})

export const hoverSlideAnimation = recipe({
  base: {
    transitionTimingFunction: 'ease-in-out',
    ':hover': {
      animation: 'none',
    },
  },
  variants: {
    direction: {
      'bottom': {
        ':hover': {
          transform: 'translateY(-100%)',
        },
      },
      'top': {
        ':hover': {
          transform: 'translateY(100%)',
        },
      },
      'left': {
        ':hover': {
          transform: 'translateX(100%)',
        },
      },
      'right': {
        ':hover': {
          transform: 'translateX(-100%)',
        },
      },
    },
  },
})
