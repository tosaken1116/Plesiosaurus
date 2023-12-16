import { style } from '@vanilla-extract/css'

export const badgeStyle = style({
  position: 'absolute',
  right: -15,
  top: -15,
  color: 'white',
  backgroundColor: 'red',
  borderRadius: '999px',
  padding: '0 0.5rem',
})

export const containerStyle = style({
  position: 'relative',
})
