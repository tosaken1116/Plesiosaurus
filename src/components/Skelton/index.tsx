import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import type { CSSProperties } from 'react'

import clsx from 'clsx'

import { resolveAnimation } from '../../libs/animation'

import { skeleton } from './index.css'

import type { AnimationArgs } from '../../libs/animation'

export type SkeltonProps = {
  className?: string
  width: number
  height: number
  radius?: 's' | 'm' | 'l'
} & AnimationArgs

/**
 * @name Skelton component
 * Skeltonを表示するコンポーネント
 * @param {Object} props - The properties of the Skelton component.
 * @param {string} props.className - Additional CSS class names for the div.
 * @param {number} props.width - The width of the div.
 * @param {number} props.height - The height of the div.
 * @param {string} props.radius - The border-radius of the div.
 * @returns {JSX.Element}
 */
export const Skelton = ({
  className,
  width,
  height,
  radius,
  animationProps,
}: SkeltonProps): JSX.Element => {
  const { style, className: animationClassName } = resolveAnimation(animationProps ?? {})
  return (
    <div
      className={clsx(skeleton({ radius }), animationClassName, className)}
      style={
        { '--width': `${width}px`, '--height': `${height}px`, ...style } as CSSProperties
      }
      role='none'
    />
  )
}
