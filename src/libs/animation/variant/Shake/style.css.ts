import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const shakeKeyframe = keyframes({
  '0%': {
    transform: 'scale(1) rotate(0deg)',
  },
  '10%': {
    transform: 'scale(1.1) rotate(15deg)',
  },
  '40%': {
    transform: 'scale(1.3) rotate(-15deg)',
  },
  '100%': {
    transform: 'scale(1) rotate(0deg)',
  },
})

export const hoverShakeAnimation = recipe({
  base: {
    ':hover': {
      animationName: shakeKeyframe,
    },
    animationDuration: 'var(--animation-duration)',
    animationDelay: 'var(--animation-delay)',
  },
  variants: {},
})

export const shakeAnimation = recipe({
  base: {
    animationName: shakeKeyframe,
    animationDuration: 'var(--animation-duration)',
    animationDelay: 'var(--animation-delay)',
  },
  variants: {},
})
