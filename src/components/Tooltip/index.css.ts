import { keyframes, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

import { vars } from '../../global.css'

const balloonKeyFrame = keyframes({
  '0%': { transform: 'scale(1) translateX(-50%)' },
  '50%': { transform: 'scale(1.05) translateX(-48%)' },
  '100%': { transform: 'scale(1) translateX(-50%)' },
})

export const container = style({
  position: 'relative',
  display: 'inline-block',
})

export const toolTip = recipe({
  base: {
    position: 'absolute',
    bottom: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    marginBottom: '6px',
    padding: '4px 8px',
    background: vars.background.primary,
    color: 'white',
    borderRadius: '4px',
    fontSize: '14px',
    textAlign: 'center',

    ':after': {
      content: '',
      position: 'absolute',
      bottom: '-5px',
      left: '50%',
      transform: 'translateX(-50%)',
      borderLeft: '5px solid transparent', // 左側の透明なボーダー
      borderRight: '5px solid transparent', // 右側の透明なボーダー
      borderTop: `5px solid ${vars.background.primary}`, // 上側の黒いボーダー
    },
  },
  variants: {
    width: {
      s: {
        width: '100px',
      },
      m: { width: '300px' },
      l: { width: '500px' },
    },
    moving: {
      true: {
        animation: `${balloonKeyFrame} 2s infinite`,
      },
    },
  },
})
