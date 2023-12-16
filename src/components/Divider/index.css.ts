import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../global.css'

export const base = style({
  backgroundColor: vars.outlineColor.primary,
  borderRadius: vars.radius.lg,
})

export const dividerStyles = recipe({
  base: {
    backgroundColor: 'grey',
  },
  variants: {
    orientation: {
      horizontal: {
        height: '1px',
        width: '100%',
      },
      vertical: {
        width: '1px',
        height: '100%',
      },
    },
  },
})
