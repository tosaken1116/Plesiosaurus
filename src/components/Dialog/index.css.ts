import { style } from '@vanilla-extract/css'

export const dialogBase = style({
  margin: '15px',
  backgroundColor: 'white',
  padding: '15px',
  borderRadius: '4px',
})

export const dialogOverlay = style({
  background: 'rgba(0, 0, 0, 0.4)',
  display: 'grid',
  placeItems: 'center',
})
