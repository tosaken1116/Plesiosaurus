import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../global.css'

export const linkStyle = recipe({
  base: {
    textDecoration: 'none',
    ':after': {
      display: 'block',
      content: '""',
      backgroundColor: 'black',
      width: '100%',
      height: '1px',
      transform: 'scale(0)',

      transition: 'transform 0.3s ease-in-out',
    },
    selectors: {
      '&:hover::after': {
        transform: 'scale(1)',
      },
    },
  },
  variants: {
    isCurrent: {
      true: {
        color: vars.colors.primary,
      },
      false: {},
    },
  },
})

export const containerStyle = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
})
