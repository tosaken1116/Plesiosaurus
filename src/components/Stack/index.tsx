import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'

import clsx from 'clsx'

import { sprinkles } from '../../layout.css'

import { joinChildren } from './libs/joinChildren'

import type { Sprinkles } from '../../layout.css'

type StackDirection = Sprinkles['flexDirection']
type Spacing = Sprinkles['gap']
type JustifyContent = Sprinkles['justifyContent']
type AlignItems = Sprinkles['alignItems']
export type StackProps = {
  component?: React.ElementType
  direction?: StackDirection
  divider?: React.ReactNode
  spacing?: Spacing
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  className?: string
  children?: React.ReactNode[] | React.ReactNode
} & React.HTMLProps<HTMLElement> &
  HTMLAttributes<HTMLElement>

/**
 * @name Stack component
 * Stackを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Stack a={1} />
 */
export const Stack = forwardRef<HTMLElement, StackProps>(
  ({
    component = 'div',
    direction,
    divider,
    spacing,
    justifyContent,
    alignItems,
    className,
    ref,
    children,
    ...props
  }: StackProps): JSX.Element => {
    const Component = component

    return (
      <Component
        className={clsx(
          sprinkles({
            display: 'flex',
            flexDirection: direction,
            justifyContent: justifyContent,
            alignItems: alignItems,
            gap: spacing,
          }),
          className,
        )}
        data-testId='stack'
        ref={ref}
        {...props}
      >
        {divider
          ? joinChildren(children, (index: string) => (
              <DividerWrapper key={index}>{divider}</DividerWrapper>
            ))
          : children}
      </Component>
    )
  },
)

type DividerWrapperProps = {
  children: React.ReactNode
}
const DividerWrapper = ({ children }: DividerWrapperProps): JSX.Element => <>{children}</>
