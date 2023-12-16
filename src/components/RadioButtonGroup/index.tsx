import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import type { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { useState } from 'react'

import clsx from 'clsx'

import { checkStyle, input, label, list } from './index.css'

export type RadioButtonGroupProps = {
  options: string[]
  defaultValue: string
  zoomIn?: boolean
} & ComponentPropsWithoutRef<'input'>

/**
 * @name RadioButtonGroupProps component
 * RadioButtonGroupを表示するコンポーネント
 * @param {string[]} props.options - props options
 * @param {string} props.defaultValue - props defaultValue
 * @param {string} props.className - props className
 * @param {boolean} props.zoomIn - props zoomIn
 * @returns {JSX.Element}
 * @example <RadioButtonGroup a={1} />
 */
export const RadioButtonGroup = ({
  options,
  defaultValue,
  className,
  zoomIn,
  ...props
}: RadioButtonGroupProps) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value)
  }

  return (
    <ul className={clsx(list, className)}>
      {options.map((option, i) => (
        <li key={`${i}-${option}`}>
          <label className={label({ zoomIn })}>
            <input
              type='radio'
              value={option}
              id={option}
              checked={selectedValue === option}
              onChange={onChange}
              className={input}
              {...props}
            />
            {option}
            <div className={checkStyle} />
          </label>
        </li>
      ))}
    </ul>
  )
}
