/** @format */
import 'modern-normalize/modern-normalize.css'

import { forwardRef } from 'react'

import { clsx } from 'clsx'

import { layout } from '../../global.css'
import { assertNonNullable } from '../../libs/assertNonNullable'

import { button } from './index.css'

import type { RecipeVariants } from '@vanilla-extract/recipes'

type AnimationObjectType =
  | 'color'
  | 'backgroundColor'
  | 'border'
  | 'scaleUp'
  | 'scaleDown'

type AnimationTasteType = 'ease' | 'easeIn' | 'easeOut' | 'easeInOut' | 'linear'

export type ButtonProps = RecipeVariants<typeof button> &
  React.HTMLProps<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    animationObject?: AnimationObjectType
    animationTaste?: AnimationTasteType
  }
type ButtonPropsWithoutUnnecessaryAttributes = Omit<
  ButtonProps,
  'animations' | 'transform' | AnimationObjectType
>
const Button = forwardRef<HTMLButtonElement, ButtonPropsWithoutUnnecessaryAttributes>(
  ({
    className,
    state,
    radius,
    outline,
    typography,
    animationObject = 'backgroundColor',
    animationTaste,
    ref,
    children,
    ...props
  }: ButtonPropsWithoutUnnecessaryAttributes) => {
    assertNonNullable(animationObject)
    assertNonNullable(state)
    const animationKey =
      animationObject == 'scaleUp' || animationObject == 'scaleDown'
        ? 'transform'
        : animationObject

    return (
      <button
        className={clsx(
          button({
            state: state,
            radius: radius,
            outline: outline,
            typography: typography,
            animations:
              animationObject == 'scaleUp'
                ? 'scaleUp'
                : animationObject == 'scaleDown'
                ? 'scaleDown'
                : `${state}--${animationObject}`,
            [animationKey]: animationTaste,
          }),
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

type ButtonIconProps = {
  className?: string
  children: React.ReactNode
} & React.HTMLAttributes<HTMLSpanElement>

const ButtonIcon = forwardRef<HTMLSpanElement, ButtonIconProps>(
  ({ className, children, ...props }: ButtonIconProps, ref) => (
    <span className={clsx(layout.center, className)} ref={ref} {...props}>
      {children}
    </span>
  ),
)

export { Button, ButtonIcon }
