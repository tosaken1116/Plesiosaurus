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
 * Badge component for displaying content with an associated badge.
 *
 * @component
 * @example
 * // Example usage of the Badge component
 * <Badge badgeComponent={<span className="custom-badge">New</span>} className="badge-container">
 *   Notifications
 * </Badge>
 *
 * @typedef {Object} BadgeProps
 * @property {React.ReactNode} children - The content to be wrapped by the Badge.
 * @property {React.ReactNode} badgeComponent - The component or content to be used as the badge.
 * @property {string} [className] - Additional class name to be applied to the Badge container.
 *
 * @param {BadgeProps} props - The properties of the Badge component.
 * @returns {JSX.Element} - The JSX element representing the Badge.
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
