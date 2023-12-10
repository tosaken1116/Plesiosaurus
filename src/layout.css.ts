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
  // etc.
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
    display: ['none', 'flex', 'block', 'inline'],
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
