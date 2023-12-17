import { style } from '@vanilla-extract/css'

import { vars } from '../../global.css'

export const toggleButtonInput = style({
  display: 'none',
})

export const toggleButtonLabel = style({
  position: 'relative',
  boxSizing: 'border-box',
  display: 'inline-block',
  width: '80px',
  height: '40px',
  cursor: 'pointer',
  background: vars.colors.gray[400],
  borderRadius: '20px',
  transition: '0.3s',
  boxShadow: `1px 1px 6px ${vars.background.primary}`,
  selectors: {
    '&:after': {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: '0.25em',
      zIndex: 2,
      width: '34px',
      height: '34px',
      margin: 'auto',
      cursor: 'pointer',
      content: '',
      background: vars.background.secondary,
      borderRadius: '100%',
      transition: '0.3s',
    },
    '&:has(:checked)': {
      background: vars.background.primary,
    },
    '&:has(:checked)::after': {
      right: '2.55em',
    },
  },
})
