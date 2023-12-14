import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../../../global.css'

export const hoverTextColorAnimation = recipe({
  base: {
    transitionTimingFunction: 'ease-in-out',
    ':hover': {
      animation: 'none',
    },
  },
  variants: {
    // 色は後で変更
    afterColor: {
      'primary': {
        ':hover': {
          color: vars.colors.green['500'],
        },
      },
      'secondary': {
        ':hover': {
          color: vars.colors.blue['500'],
        },
      },
      'error': {
        ':hover': {
          color: vars.colors.purple['500'],
        },
      },
      // 'success': {
      //   ':hover': {
      //     color: vars.hover.success,
      //   },
      // },
      // 'warning': {
      //   ':hover': {
      //     color: vars.hover.warning,
      //   },
      // },
      // 'info': {
      //   ':hover': {
      //     color: vars.hover.info,
      //   },
      // },
      // 'light': {
      //   ':hover': {
      //     color: vars.hover.light,
      //   },
      // },
      // 'dark': {
      //   ':hover': {
      //     color: vars.hover.dark,
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
