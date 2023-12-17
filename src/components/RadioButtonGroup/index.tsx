import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import type { ChangeEvent, ComponentPropsWithoutRef } from 'react'
import { useState } from 'react'

import clsx from 'clsx'

import { resolveAnimation } from '../../libs/animation'

import { checkStyle, input, label, list } from './index.css'

import type { AnimationArgs } from '../../libs/animation'

export type RadioButtonGroupProps = {
  options: string[]
  defaultValue: string
  zoomIn?: boolean
} & ComponentPropsWithoutRef<'input'> &
  AnimationArgs

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
  animationProps,
  ...props
}: RadioButtonGroupProps): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState(defaultValue)
  const { style, className: animationClassName } = resolveAnimation(animationProps ?? {})

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
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
              className={clsx(input, animationClassName)}
              style={style}
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
