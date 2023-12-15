import { style } from '@vanilla-extract/css'

export const dialogBase = style({
  margin: '15px',
  backgroundColor: 'white',
  padding: '15px',
  borderRadius: '4px',
})

export const dialogOverlay = style({
  background: 'rgba(0, 0, 0, 0.8)',
  display: 'grid',
  placeItems: 'center',
})

export const buttonBase = style({
  background: 'none',
  color: 'inherit',
  border: 'none',
  padding: '0',
  font: 'inherit',
  cursor: 'pointer',
  outline: 'inherit',
})
