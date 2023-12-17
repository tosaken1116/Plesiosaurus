import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../global.css'

const zoomIn = keyframes({
  '0%': { transform: 'scale(1)' },
  '50%': { transform: 'scale(1.2)' },
  '100%': { transform: 'scale(1)' },
})

export const input = style({
  position: 'absolute',
  visibility: 'hidden',
})

export const list = style({
  listStyle: 'none',
  display: 'flex',
})

export const label = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    padding: '24px 24px 24px 80px',
    position: 'relative',
    fontWeight: 700,
    fontSize: '20px',
    cursor: 'pointer',
    color: vars.colors.gray[500],
    transition: 'all 0.3s',

    ':hover': {
      color: vars.colors.gray[800],
    },
    selectors: {
      '&:has(:checked)': {
        color: vars.colors.gray[800],
      },
    },
  },

  variants: {
    zoomIn: {
      true: {
        selectors: {
          '&:has(:checked)': {
            color: vars.colors.gray[800],
            animation: `${zoomIn} 0.5s ease-in-out`,
          },
        },
      },
    },
  },
})

export const checkStyle = style({
  position: 'absolute',
  border: `4px solid ${vars.colors.blue[200]}`,
  borderRadius: '100%',
  height: '26px',
  width: '26px',
  top: '50%',
  left: '10%',
  transform: 'translateY(-50%)',
  zIndex: 5,
  transition: 'all 0.3s',

  selectors: {
    [`${label()}:has(:checked) &`]: {
      background: vars.colors.blue[500],
      boxShadow: `1px 1px 3px ${vars.colors.blue[700]}`,
    },
  },
})
