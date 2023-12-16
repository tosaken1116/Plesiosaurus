---
to: src/libs/animation/variant/<%= name %>/style.css.ts
---
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../../../global.css'

export const hover<%= name %>Animation = recipe({
  base: {
  },
})

export const <%= lowerName %>Animation = recipe({
  base: {
  },
})
