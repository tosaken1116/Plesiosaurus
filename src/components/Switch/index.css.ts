import { style } from '@vanilla-extract/css'

export const toggleButtonInput = style({
  position: 'absolute',
  zIndex: -10,
  opacity: 0,
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
      left: '43px',
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
    ['&::checked + &:after']: {
      left: '3px',
    },
  },
})
