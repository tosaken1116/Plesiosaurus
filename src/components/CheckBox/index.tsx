import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { forwardRef, useState } from 'react'
import type { HTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'
import { CheckSquare2 } from 'lucide-react'

import {
  checkContainerStyle,
  containerStyle,
  iconStyle,
  inputDefaultStyle,
  labelStyle,
} from './index.css'

export type CheckboxProps = {
  className?: string
  customCheckbox?: CustomCheckBox
  checked?: boolean
  label?: ReactNode
  color?: string
} & HTMLAttributes<HTMLInputElement>

type CustomCheckBox = {
  checked: ReactNode
  unchecked: ReactNode
}
const noop = (): void => {}
/**
 * @name Checkbox component
 * Checkboxを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Checkbox a={1} />
 */
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, id, customCheckbox, ...props }, ref): JSX.Element => {
    const checkedIcon = customCheckbox?.checked ?? (
      <CheckSquare2 fill={props.color || 'aquamarine'} color='gray' />
    )

    const uncheckedIcon = customCheckbox?.unchecked ?? <CheckSquare2 color='gray' />
    const handleChange = props.onChange ?? noop
    const [checked, setChecked] = useState(props.checked || false)
    return (
      <label className={containerStyle}>
        <span className={checkContainerStyle}>
          {checked ? (
            <span className={iconStyle}> {checkedIcon}</span>
          ) : (
            <span className={iconStyle}> {uncheckedIcon}</span>
          )}
          <input
            ref={ref}
            type='checkbox'
            id={id}
            onChange={(e) => {
              setChecked(!checked)
              handleChange(e)
            }}
            className={clsx(inputDefaultStyle, className)}
            {...props}
          />
        </span>

        <p className={labelStyle}>{props.label}</p>
      </label>
    )
  },
)
