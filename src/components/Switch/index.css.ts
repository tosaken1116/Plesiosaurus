import { style } from '@vanilla-extract/css'

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
  background: 'red',
  borderRadius: '20px',
  transition: '.3s',
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
      background: 'white',
      borderRadius: '100%',
      transition: '0.3s',
    },
    '&:hover': {
      background: 'blue',
    },
    '&:has(:checked)': {
      background: 'blue',
    },
    '&:has(:checked)::after': {
      right: '2.55em',
    },
  },
})
