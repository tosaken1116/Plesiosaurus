import { styleVariants } from '@vanilla-extract/css'

import { vars } from './global.css'

export const fontStyles = styleVariants({
  h1: vars.typography.h1,
  h2: vars.typography.h2,
  h3: vars.typography.h3,
  h4: vars.typography.h4,
  h5: vars.typography.h5,
  h6: vars.typography.h6,
  p: vars.typography.p,
  strong: vars.typography.strong,
  'body-large': vars.typography['body-large'],
  'body-medium': vars.typography['body-medium'],
  'body-small': vars.typography['body-small'],
  'backquote': vars.typography['backquote'],
})
