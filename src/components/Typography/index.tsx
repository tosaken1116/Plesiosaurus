import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { forwardRef } from 'react'

import { clsx } from 'clsx'

import { fontStyles } from '../../font.css'
import { resolveAnimation } from '../../libs/animation'

import type { AnimationArgs } from '../../libs/animation'

export type TypographyProps = {
  component: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong'
  variant: keyof typeof fontStyles
  children: string
  className?: string
} & React.HTMLAttributes<HTMLHeadingElement> &
  React.HTMLAttributes<HTMLParagraphElement> &
  React.HTMLAttributes<HTMLSpanElement> &
  AnimationArgs

/**
 * Typography component for rendering text with different styles and elements.
 *
 * @component
 *
 * @param {Object} props - The properties of the Typography component.
 * @param {React.ElementType} props.component - The HTML element type or React component to be used as the root element.
 * @param {keyof typeof fontStyles} props.variant - The variant of the text style, selected from the available font styles.
 * @param {React.ReactNode} props.children - The content to be rendered inside the Typography component.
 * @param {string} [props.className] - Additional CSS class names to be applied to the root element.
 *
 * @return {React.ReactElement} The rendered Typography component.
 *
 * @throws {Error} Throws an error if the specified variant is not a valid key in the `fontStyles` object.
 */
const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  (
    {
      component,
      variant,
      children,
      className,
      animationProps,
      ...props
    }: TypographyProps,
    ref,
  ) => {
    const Component = component
    const { style, className: animationClassName } = resolveAnimation(
      animationProps ?? {},
    )
    return (
      <Component
        className={clsx(fontStyles[variant], animationClassName, className)}
        ref={ref}
        style={style}
        {...props}
      >
        {children}
      </Component>
    )
  },
)

export { Typography }
