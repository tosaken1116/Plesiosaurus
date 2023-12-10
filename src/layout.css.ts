import { styleVariants } from '@vanilla-extract/css'
import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'

export const layout = styleVariants({
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const space = {
  0: 0,
  1: '8px',
  2: '16px',
  3: '24px',
  4: '32px',
  5: '40px',
}

const fraction = {
  0: 0,
  1: 'repeat(1, 1fr)',
  2: 'repeat(2, 1fr)',
  3: 'repeat(3, 1fr)',
  4: 'repeat(4, 1fr)',
  5: 'repeat(5, 1fr)',
  6: 'repeat(6, 1fr)',
  7: 'repeat(7, 1fr)',
  8: 'repeat(8, 1fr)',
  9: 'repeat(9, 1fr)',
  10: 'repeat(10, 1fr)',
  11: 'repeat(11, 1fr)',
  12: 'repeat(12, 1fr)',
}

const gridNumber = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
  13: 13,
}

const responsiveProperties = defineProperties({
  conditions: {
    xs: { '@media': 'screen and (min-width: 0px)' },
    sm: { '@media': 'screen and (min-width: 480px)' },
    md: { '@media': 'screen and (min-width: 640px)' },
    lg: { '@media': 'screen and (min-width: 768px)' },
    xl: { '@media': 'screen and (min-width: 1024px)' },
    xxl: { '@media': 'screen and (min-width: 1280px)' },
  },
  defaultCondition: 'lg',
  properties: {
    display: ['none', 'flex', 'block', 'inline', 'grid'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    gridTemplateColumns: fraction,
    gridTemplateRows: fraction,
    gridColumnStart: gridNumber,
    gridColumnEnd: gridNumber,
    gridRowStart: gridNumber,
    gridRowEnd: gridNumber,
    rowGap: space,
    columnGap: space,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    gap: space, // etc.
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

export const sprinkles = createSprinkles(responsiveProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
