import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../../../global.css'

export const hoverBackGroundColorFadeAnimation = recipe({
  base: {
    transitionTimingFunction: 'ease-in-out',
    transitionDuration: 'var(--transition-duration)',
    transitionDelay: 'var(--transition-delay)',
    ':hover': {
      animation: 'none',
    },
  },
  variants: {
    afterColor: {
      'primary': {
        ':hover': {
          backgroundColor: vars.hover.primary,
        },
      },
      'secondary': {
        ':hover': {
          backgroundColor: vars.hover.secondary,
        },
      },
      'error': {
        ':hover': {
          backgroundColor: vars.hover.error,
        },
      },
      // 'success': {
      //   ':hover': {
      //     backgroundColor: vars.hover.success,
      //   },
      // },
      // 'warning': {
      //   ':hover': {
      //     backgroundColor: vars.hover.warning,
      //   },
      // },
      // 'info': {
      //   ':hover': {
      //     backgroundColor: vars.hover.info,
      //   },
      // },
      // 'light': {
      //   ':hover': {
      //     backgroundColor: vars.hover.light,
      //   },
      // },
      // 'dark': {
      //   ':hover': {
      //     backgroundColor: vars.hover.dark,
      //   },
      // },
    },
    easing: {
      'ease': {
        ':hover': {
          transitionTimingFunction: 'ease',
        },
      },
      'easeIn': {
        ':hover': {
          transitionTimingFunction: 'ease-in',
        },
      },
      'easeOut': {
        ':hover': {
          transitionTimingFunction: 'ease-out',
        },
      },
      'easeInOut': {
        ':hover': {
          transitionTimingFunction: 'ease-in-out',
        },
      },
      'linear': {
        ':hover': {
          transitionTimingFunction: 'linear',
        },
      },
    },
  },
})
