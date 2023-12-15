---
to: src/libs/animation/variant/<%= name %>/type.ts
---
import type { CSSProperties } from 'react'

import type { AnimationBaseProps } from '../type'

export type OptionProps = {
}

export type <%= name %>Props = {
  key: "<%= key %>"
  option: OptionProps & AnimationBaseProps
}
