import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'

import clsx from 'clsx'

import { sprinkles } from '../../layout.css'

import { spacingStyle } from './index.css'
import { joinChildren } from './libs/joinChildren'

import type { Sprinkles } from '../../layout.css'

type JustifyContent = Sprinkles['justifyContent']
type AlignItems = Sprinkles['alignItems']
export type StackProps = {
  component?: React.ElementType
  direction?: 'row' | 'column'
  divider?: React.ReactNode
  spacing?: string
  justifyContent?: JustifyContent
  alignItems?: AlignItems
  className?: string
  children?: React.ReactNode[] | React.ReactNode
} & React.HTMLProps<HTMLElement> &
  HTMLAttributes<HTMLElement>

/**
 * Stack component for arranging child elements in a flex container with customizable styling.
 *
 * @component
 * @example
 * // Example usage of the Stack component
 * <Stack
 *   component="section"
 *   direction="column"
 *   divider={<Divider />}
 *   spacing="1rem"
 *   justifyContent="center"
 *   alignItems="flex-start"
 *   className="custom-stack"
 * >
 *   <StackItem>Item 1</StackItem>
 *   <StackItem>Item 2</StackItem>
 *   <StackItem>Item 3</StackItem>
 * </Stack>
 *
 * @typedef {Object} StackProps
 * @property {React.ElementType} [component='div'] - The HTML element type to be used as the stack container.
 * @property {'row' | 'column'} [direction] - The direction of the stack ('row' or 'column').
 * @property {React.ReactNode} [divider] - The divider element to be placed between stack items.
 * @property {string} [spacing] - The spacing between stack items.
 * @property {JustifyContent} [justifyContent] - The alignment of stack items along the main axis.
 * @property {AlignItems} [alignItems] - The alignment of stack items along the cross axis.
 * @property {string} [className] - Additional CSS class name for the stack container.
 * @property {React.Ref<HTMLElement>} ref - React ref for the stack container.
 * @property {React.ReactNode} children - The content of the stack container.
 * @property {React.HTMLProps<HTMLElement>} [props] - Any additional HTML attributes to be passed to the stack container.
 *
 * @param {StackProps} props - The properties of the Stack component.
 * @returns {JSX.Element} - The JSX element representing the Stack.
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
          }),
          spacingStyle({ flexDirection: direction }),
          className,
        )}
        data-testId='stack'
        ref={ref}
        {...props}
        style={{ '--spacing': `${spacing}px` }}
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
