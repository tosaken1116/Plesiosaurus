import { style, styleVariants } from '@vanilla-extract/css'

import { vars } from '../../global.css'

export const base = style({
  backgroundColor: vars.outlineColor.primary,
  borderRadius: vars.radius.lg,
})

export const dividerStyles = styleVariants({
  horizontal: [
    base,
    {
      height: '1px',
      width: '100%',
    },
  ],
  vertical: [
    base,
    {
      width: '1px',
      height: '100%',
    },
  ],
})
