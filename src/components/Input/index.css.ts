import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../global.css'

export const roundedKeyFrame = keyframes({
  '0%': {
    width: 200,
    borderRadius: 4,
    padding: '4px 8px',
  },
  '50%': {
    width: 208,
    borderRadius: 8,
    padding: '4px 12px',
  },
  '100%': {
    width: 200,
    borderRadius: 4,
    padding: '4px 8px',
  },
})

export const label = style({
  display: 'flex',
  flexDirection: 'column',
})

export const input = recipe({
  base: {
    padding: '4px 8px',
    width: 200,
    transition: '0.5s',
    border: '2px solid gray',
    borderRadius: 4,
    selectors: {
      ['&:focus']: {
        outline: 0,
        borderColor: vars.colors.blue[400],
        boxShadow: '1px 1px 6px black',
      },
    },
  },
  variants: {
    close: {
      true: {
        width: 0,
        selectors: {
          '&:hover': {
            width: 200,
            outline: 0,
            borderColor: vars.colors.blue[400],
            boxShadow: '1px 1px 6px black',
          },
        },
      },
    },
    currentValue: {
      true: {
        width: 200,
      },
    },
    moving: {
      true: {
        selectors: {
          ['&:focus']: {
            animation: `${roundedKeyFrame} 1.5s infinite`,
          },
        },
      },
    },
  },
})
