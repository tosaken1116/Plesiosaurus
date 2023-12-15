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
