/** @format */
import 'modern-normalize/modern-normalize.css'

import { forwardRef } from 'react'

import { clsx } from 'clsx'

import { layout } from '../../layout.css'
import { resolveAnimation } from '../../libs/animation'

import { button } from './index.css'

import type { AnimationProps } from '../../libs/animation/variant/AnimationFactory'
import type { AnimationBaseProps } from '../../libs/animation/variant/type'
import type { RecipeVariants } from '@vanilla-extract/recipes'

// TODO: 将来的には削除してそれぞれのanimationを作成する
type AnimationObjectType = 'border' | 'scaleUp' | 'scaleDown'

export type ButtonProps = RecipeVariants<typeof button> &
  React.HTMLProps<HTMLButtonElement> &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    animationObject?: AnimationObjectType
  } & AnimationBaseProps &
  AnimationProps

type ButtonPropsWithoutUnnecessaryAttributes = Omit<
  ButtonProps,
  'animations' | 'transform' | AnimationObjectType
>

/**
 * Button component with customizable styling and animations.
 *
 * @component
 * @example
 * // Example usage of the Button component
 * <Button state="normal" radius="medium" outline={false} typography="bold">
 *   Click me
 * </Button>
 *
 * @param {Object} props - The properties of the Button component.
 * @param {string} props.className - Additional CSS class names for the button.
 * @param {string} props.state - The state of the button (e.g., 'normal', 'hover', 'active').
 * @param {string} props.radius - The border-radius of the button.
 * @param {boolean} props.outline - Whether the button has an outline or not.
 * @param {string} props.typography - The typography style of the button text.
 * @param {string} props.animationObject - The type of animation to apply to the button.
 * @param {string} props.delay - The delay before the animation starts.
 * @param {string} props.duration - The duration of the animation.
 * @param {string} props.easing - The easing function for the animation.
 * @param {React.Ref} props.ref - React ref for the button element.
 * @param {React.ReactNode} props.children - The content of the button.
 * @param {Object} props... - Any additional HTML attributes to be passed to the button element.
 *
 * @returns {React.Component} The rendered Button component.
 */
const Button = forwardRef<HTMLButtonElement, ButtonPropsWithoutUnnecessaryAttributes>(
  ({
    className,
    state,
    radius,
    outline,
    typography,
    delay = '0s',
    duration = '0.3s',
    easing,
    ref,
    children,
    ...props
  }: ButtonPropsWithoutUnnecessaryAttributes) => {
    const { style: bgColorStyle, className: bgColorClassName } = resolveAnimation({
      hover: {
        key: 'bgColorFade',
        option: {
          delay: delay,
          afterColor: state,
          duration: duration,
          easing: easing,
        },
      },
    })

    const { style: textStyle, className: textClassName } = resolveAnimation({
      hover: {
        key: 'textColor',
        option: {
          delay: delay,
          afterColor: state,
          duration: duration,
          easing: easing,
        },
      },
    })

    return (
      <button
        className={clsx(
          button({
            state: state,
            radius: radius,
            outline: outline,
            typography: typography,
          }),
          textClassName,
          bgColorClassName,
          className,
        )}
        ref={ref}
        {...props}
        style={{ ...bgColorStyle, ...textStyle }}
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

/**
 * Icon component for use within a button.
 *
 * @component
 * @example
 * // Example usage of the ButtonIcon component
 * <ButtonIcon className="icon" onClick={handleIconClick}>
 *   <IconComponent />
 * </ButtonIcon>
 *
 * @param {Object} props - The properties of the ButtonIcon component.
 * @param {string} [props.className] - Additional CSS class names for the icon container.
 * @param {React.ReactNode} props.children - The content of the icon.
 * @param {React.HTMLAttributes<HTMLSpanElement>} props... - Any additional HTML attributes to be passed to the icon container.
 *
 * @returns {React.Component} The rendered ButtonIcon component.
 */
const ButtonIcon = forwardRef<HTMLSpanElement, ButtonIconProps>(
  ({ className, children, ...props }: ButtonIconProps, ref) => (
    <span className={clsx(layout.center, className)} ref={ref} {...props}>
      {children}
    </span>
  ),
)

export { Button, ButtonIcon }
