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
 * Checkbox component for interactive checkbox input with customizable styling.
 *
 * @component
 * @example
 * // Example usage of the Checkbox component
 * <Checkbox
 *   className="custom-checkbox"
 *   customCheckbox={{ checked: <CustomCheckedIcon />, unchecked: <CustomUncheckedIcon /> }}
 *   checked={true}
 *   label="Enable Feature"
 *   color="green"
 *   onChange={(e) => handleCheckboxChange(e)}
 * />
 *
 * @typedef {Object} CheckboxProps
 * @property {string} [className] - Additional CSS class name for the checkbox container.
 * @property {CustomCheckBox} [customCheckbox] - Custom icons for the checked and unchecked states.
 * @property {boolean} [checked] - The current checked state of the checkbox.
 * @property {React.ReactNode} [label] - The label to be displayed next to the checkbox.
 * @property {string} [color] - The color of the checkbox (applies to the checked state).
 * @property {HTMLAttributes<HTMLInputElement>} [props] - Any additional HTML attributes to be passed to the checkbox input.
 *
 * @typedef {Object} CustomCheckBox
 * @property {React.ReactNode} checked - Custom content for the checked state.
 * @property {React.ReactNode} unchecked - Custom content for the unchecked state.
 *
 * @param {CheckboxProps} props - The properties of the Checkbox component.
 * @param {React.Ref<HTMLInputElement>} ref - React ref for the checkbox input element.
 * @returns {JSX.Element} - The JSX element representing the Checkbox.
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
