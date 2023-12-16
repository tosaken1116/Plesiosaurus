import { style } from '@vanilla-extract/css'

import { vars } from '../global.css'

export const checkContainerStyle = style({
  position: 'relative',
  cursor: 'pointer',
})

export const inputDefaultStyle = style({
  width: '32px',
  height: '32px',
  border: `1px solid ${vars.outlineColor.primary}`,
  transition: 'all 0.2s ease-in-out',
  opacity: 0,
})

export const iconStyle = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
})

export const containerStyle = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
})

export const labelStyle = style({
  marginLeft: '0.1rem',
  userSelect: 'none',
})
