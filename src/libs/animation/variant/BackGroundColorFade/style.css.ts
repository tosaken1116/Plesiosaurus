import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../../../global.css'

export const hoverBackGroundColorFadeAnimation = recipe({
  base: {
    transitionTimingFunction: 'ease-in-out',
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
    duration: {
      '0s': {
        ':hover': {
          transitionDuration: '0s',
        },
      },
      '0.3s': {
        ':hover': {
          transitionDuration: '0.3s',
        },
      },
      '0.5s': {
        ':hover': {
          transitionDuration: '0.5s',
        },
      },
      '0.8s': {
        ':hover': {
          transitionDuration: '0.8s',
        },
      },
    },
    delay: {
      '0s': {
        ':hover': {
          transitionDelay: '0s',
        },
      },
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
