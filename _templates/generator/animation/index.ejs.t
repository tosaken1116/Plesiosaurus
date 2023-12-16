---
to: src/libs/animation/variant/<%= name %>/index.ts
---
export type { <%= name %>Props } from './type'

export { genAnimation as gen<%= name %>Animation } from './gen'
