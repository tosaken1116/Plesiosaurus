import { style } from '@vanilla-extract/css'

import { vars } from '../../global.css'

export const wrapper = style({
  borderRadius: 6,
  background: vars.colors.gray[200],
  border: `1px solid ${vars.background.primary}`,
  padding: '2px',
  height: 30,
})

export const bar = style({
  borderRadius: 4,
  backgroundColor: vars.background.primary,
  height: '100%',
  transition: '0.5s',
})
