import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

const squeezeYKeyframe = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '80%': {
    transform: 'scaleX(0.7); scaleY(1.3)',
  },
  '100%': {
    transform: 'scale(1)',
  },
})

const squeezeXKeyframe = keyframes({
  '0%': {
    transform: 'scale(1)',
  },
  '80%': {
    transform: 'scaleY(0.7); scaleX(1.3)',
  },
  '100%': {
    transform: 'scale(1)',
  },
})

export const squeezeAnimation = recipe({
  base: {
    animationDuration: 'var(--animation-duration)',
    animationDelay: 'var(--animation-delay)',
  },
  variants: {
    axis: {
      'x': {
        animationName: squeezeXKeyframe,
      },
      'y': {
        animationName: squeezeYKeyframe,
      },
    },
  },
})

export const hoverSqueezeAnimation = recipe({
  base: {
    transitionDuration: 'var(--animation-duration)',
    transitionDelay: 'var(--animation-delay)',
  },
  variants: {
    axis: {
      'x': {
        ':hover': {
          transform: 'scaleY(0.7) scaleX(1.3)',
        },
      },
      'y': {
        ':hover': {
          transform: 'scaleX(0.7) scaleY(1.3)',
        },
      },
    },
  },
})
