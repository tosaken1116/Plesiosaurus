import { keyframes } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../global.css'

const loading = keyframes({
  '0%': { left: '-100%' },
  '100%': { left: '100%' },
})

export const skeleton = recipe({
  base: {
    width: 'var(--width)',
    height: 'var(--height)',
    backgroundColor: '#e0e0e0',
    borderRadius: '4px',
    overflow: 'hidden',
    position: 'relative',

    '::after': {
      content: '',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: `linear-gradient(to right, transparent 0%, ${vars.background.secondary}, transparent 100%)`,
      animation: `${loading} 1.2s infinite`,
    },
  },
  variants: {
    radius: {
      s: {
        borderRadius: '4px',
      },
      m: {
        borderRadius: '8px',
      },
      l: {
        borderRadius: '16px',
      },
    },
  },
})
