import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { forwardRef } from 'react'

import { clsx } from 'clsx'

import { fontStyles } from '../../font.css'

export type TypographyProps = {
  component: React.ElementType
  variant: keyof typeof fontStyles
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLSpanElement>

/**
 * @name Typography component
 * Typographyを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Typography a={1} />
 */
const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ component, variant, children, className, ...props }: TypographyProps, ref) => {
    const Component = component

    return (
      <Component className={clsx(fontStyles[variant], className)} ref={ref} {...props}>
        {children}
      </Component>
    )
  },
)

export { Typography }
