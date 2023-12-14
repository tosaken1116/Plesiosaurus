/** @format */
import 'modern-normalize/modern-normalize.css'

import { forwardRef } from 'react'

import { clsx } from 'clsx'

import { layout } from '../../global.css'
import { resolveAnimation } from '../../libs/animation'
import { assertNonNullable } from '../../libs/assertNonNullable'

import { button } from './index.css'

import type { BackGroundColorFadeAnimationProps } from '../../libs/animation/variant/BackGroundColorFade/type'
import type { AnimationBaseProps } from '../../libs/animation/variant/type'
import type { RecipeVariants } from '@vanilla-extract/recipes'

// TODO: 将来的には削除してそれぞれのanimationを作成する
type AnimationObjectType = 'color' | 'border' | 'scaleUp' | 'scaleDown'

export type ButtonProps = RecipeVariants<typeof button> &
  React.HTMLProps<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    animationObject?: AnimationObjectType
  } & AnimationBaseProps &
  BackGroundColorFadeAnimationProps

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
    animationObject = 'color',
    delay = '0s',
    duration = '0.3s',
    easing,
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
            [animationKey]: easing,
          }),
          resolveAnimation<'background'>({
            hover: {
              animation: 'backGroundColorFade',
              option: {
                delay: delay,
                afterColor: state,
                duration: duration,
                easing: easing,
              },
            },
          }),
          resolveAnimation<'textColor'>({
            hover: {
              animation: 'textColor',
              option: {
                delay: delay,
                afterColor: state,
                duration: duration,
                easing: easing,
              },
            },
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
