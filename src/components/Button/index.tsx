/** @format */
import { forwardRef } from 'react'

import { clsx } from 'clsx'

import { states } from './index.css'
import { radius } from './index.css'

export type ButtonProps = {
  className?: string
  state?: keyof typeof states
  roundness?: keyof typeof radius
  ref?: React.Ref<HTMLButtonElement>
  children?: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    state = 'primary',
    roundness = 'md',
    ref,
    children,
    ...props
  }: ButtonProps) => (
    <button
      className={clsx(states[state], radius[roundness], className)}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  ),
)
