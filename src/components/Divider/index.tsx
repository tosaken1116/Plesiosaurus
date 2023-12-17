import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { forwardRef } from 'react'

import clsx from 'clsx'

import { resolveAnimation } from '../../libs/animation'

import { dividerStyles } from './index.css'

import type { AnimationArgs } from '../../libs/animation'

export type DividerProps = {
  orientation?: 'horizontal' | 'vertical'
  className?: string
} & React.HTMLProps<HTMLDivElement> &
  AnimationArgs

/**
 * Divider component for creating horizontal or vertical dividers with customizable styling.
 *
 * @component
 * @example
 * // Example usage of the Divider component
 * <Divider orientation="horizontal" className="custom-divider" />
 *
 * @typedef {Object} DividerProps
 * @property {'horizontal' | 'vertical'} [orientation] - The orientation of the divider ('horizontal' or 'vertical').
 * @property {string} [className] - Additional CSS class name for the divider element.
 * @property {React.HTMLProps<HTMLDivElement>} [props] - Any additional HTML attributes to be passed to the divider element.
 *
 * @param {DividerProps} props - The properties of the Divider component.
 * @param {React.Ref<HTMLDivElement>} ref - React ref for the divider element.
 * @returns {JSX.Element} - The JSX element representing the Divider.
 */
const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({
    className,
    orientation = 'horizontal',
    animationProps,
    ref,
    ...props
  }: DividerProps) => {
    const { style, className: animationClassName } = resolveAnimation(
      animationProps ?? {},
    )

    return (
      <div
        style={style}
        ref={ref}
        className={clsx(dividerStyles({ orientation }), animationClassName, className)}
        {...props}
        data-testId='divider'
      />
    )
  },
)

export { Divider }
