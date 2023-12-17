---
to: src/libs/animation/variant/<%= name %>/gen.ts
---
import { hover<%= name %>Animation, <%= lowerName %>Animation } from './style.css'

import type { <%= lowerName %>Props } from '.'
import type { GeneratedAnimationValue } from '../type'

export const genAnimation = (
  props: <%= lowerName %>Props['option'] = {
  },
  isHover: boolean = false,
): GeneratedAnimationValue => ({
  className: isHover
      ? hover<%= name %>Animation(props)
      : <%= lowerName %>Animation(props),
  style: {  },
})
