/** @format */

import { createVar } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../global.css'

export const finalColor = createVar()

export const button = recipe({
  base: {
    display: 'flex',
    padding: '8px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    border: 'none',
  },

  variants: {
    state: {
      primary: {
        background: vars.background.primary,
        color: vars.foreground.primary,
      },
      secondary: {
        background: vars.background.secondary,
        color: vars.foreground.secondary,
      },
      error: {
        background: vars.background.error,
        color: vars.foreground.error,
      },
    },
    outline: {
      primary: {
        border: `2.5px solid ${vars.outlineColor.primary}`,
      },
      secondary: {
        border: `2.5px solid ${vars.outlineColor.secondary}`,
      },
      error: {
        border: `2.5px solid ${vars.outlineColor.error}`,
      },
      none: { border: 'none' },
    },
    radius: {
      lg: {
        borderRadius: vars.radius.lg,
      },
      md: {
        borderRadius: vars.radius.md,
      },
      none: {
        borderRadius: vars.radius.none,
      },
    },
    typography: {
      'body-medium': vars.typography['body-medium'],
    },
    animations: {
      'scaleUp': {
        selectors: {
          '&:hover': {
            transform: 'scale(1.1)',
          },
        },
      },
      'scaleDown': {
        selectors: {
          '&:hover': {
            transform: 'scale(0.9)',
          },
        },
      },
      'primary--border': {
        selectors: {
          '&:hover': {
            border: `2.5px solid ${vars.hover.primary}`,
          },
        },
      },
      'secondary--border': {
        selectors: {
          '&:hover': {
            border: `2.5px solid ${vars.hover.secondary}`,
          },
        },
      },
      'error--border': {
        selectors: {
          '&:hover': {
            border: `2.5px solid ${vars.hover.error}`,
          },
        },
      },
      'primary--backgroundColor': {
        selectors: {
          '&:hover': {
            backgroundColor: vars.hover.primary,
          },
        },
      },
      'secondary--backgroundColor': {
        selectors: {
          '&:hover': {
            backgroundColor: vars.hover.secondary,
          },
        },
      },
      'error--backgroundColor': {
        selectors: {
          '&:hover': {
            backgroundColor: vars.hover.error,
          },
        },
      },
      'primary--color': {
        selectors: {
          '&:hover': {
            color: vars.hover.primary,
          },
        },
      },
      'secondary--color': {
        selectors: {
          '&:hover': {
            color: vars.hover.secondary,
          },
        },
      },
      'error--color': {
        selectors: {
          '&:hover': {
            color: vars.hover.error,
          },
        },
      },
    },
    transform: {
      ease: {
        transition: 'transform 0.2s ease',
      },
      easeIn: {
        transition: 'transform 0.2s ease-in',
      },
      easeOut: {
        transition: 'transform 0.2s ease-out',
      },
      easeInOut: {
        transition: 'transform 0.2s ease-in-out',
      },
      liner: {
        transition: 'transform 0.2s liner',
      },
    },
    backgroundColor: {
      ease: {
        transition: 'background-color 0.3s ease',
      },
      easeIn: {
        transition: 'background-color 0.3s ease-in',
      },
      easeOut: {
        transition: 'background-color 0.3s ease-out',
      },
      easeInOut: {
        transition: 'background-color 0.3s ease-in-out',
      },
      liner: {
        transition: 'background-color 0.3s liner',
      },
    },
    border: {
      ease: {
        transition: 'border 0.3s ease',
      },
      easeIn: {
        transition: 'border 0.3s ease-in',
      },
      easeOut: {
        transition: 'border 0.3s ease-out',
      },
      easeInOut: {
        transition: 'border 0.3s ease-in-out',
      },
      liner: {
        transition: 'border 0.3s liner',
      },
    },
    color: {
      ease: {
        transition: 'color 0.3s ease',
      },
      easeIn: {
        transition: 'color 0.3s ease-in',
      },
      easeOut: {
        transition: 'color 0.3s ease-out',
      },
      easeInOut: {
        transition: 'color 0.3s ease-in-out',
      },
      liner: {
        transition: 'color 0.3s liner',
      },
    },
  },
  defaultVariants: {
    state: 'primary',
    outline: 'primary',
    radius: 'lg',
    typography: 'body-medium',
  },
})
