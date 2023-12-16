import { style } from '@vanilla-extract/css'

import { vars } from '../global.css'

export const inputDefaultStyle = style({
  appearance: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  width: '23px',
  height: '23px',
  border: `1px solid ${vars.outlineColor.primary}`,
  borderRadius: '5px',
  transition: 'all 0.2s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: '#ccc',
    },
    '&:after': {
      content: '',
      display: 'none',
    },
    [`&:checked:after`]: {
      content: '\\2713',
      display: 'block',
    },
  },
})
