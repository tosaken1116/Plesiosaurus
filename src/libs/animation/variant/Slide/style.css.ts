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
    duration: {
      '1s': {
        animationDuration: '1s',
      },
      '2s': {
        animationDuration: '2s',
      },
      '3s': {
        animationDuration: '3s',
      },
    },
    delay: {
      '1s': {
        animationDelay: '1s',
      },
      '2s': {
        animationDelay: '2s',
      },
      '3s': {
        animationDelay: '3s',
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
    duration: {
      '1s': {
        ':hover': {
          transitionDuration: '1s',
        },
      },
      '2s': {
        ':hover': {
          transitionDuration: '2s',
        },
      },
      '3s': {
        ':hover': {
          transitionDuration: '3s',
        },
      },
    },
    delay: {
      '1s': {
        ':hover': {
          transitionDelay: '1s',
        },
      },
      '2s': {
        ':hover': {
          transitionDelay: '2s',
        },
      },
      '3s': {
        ':hover': {
          transitionDelay: '3s',
        },
      },
    },
  },
})
