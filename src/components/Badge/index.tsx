import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import type { ReactNode } from 'react'

import clsx from 'clsx'

import { badgeStyle, containerStyle } from './index.css'

export type BadgeProps = {
  children: ReactNode
  badgeComponent: ReactNode
  className?: string
}

/**
 * @name Badge component
 * Badgeを表示するコンポーネント
 * @param {ReactNOde} children - main component to display
 * @param {ReactNode} badgeComponent - Badge component to display
 * @returns {JSX.Element}
 * @example <Badge a={1} />
 */
export const Badge = ({
  children,
  badgeComponent,
  className,
}: BadgeProps): JSX.Element => (
  <span className={containerStyle}>
    <span className={clsx(badgeStyle, className)}>{badgeComponent}</span>
    {children}
  </span>
)
