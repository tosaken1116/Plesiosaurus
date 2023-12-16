import { recipe } from '@vanilla-extract/recipes'

export const spacingStyle = recipe({
  base: { gap: 'var(--spacing)', display: 'flex' },
  variants: {
    flexDirection: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
      },
    },
  },
})
