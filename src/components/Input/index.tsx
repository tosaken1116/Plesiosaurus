import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import { forwardRef, useState } from 'react'
import type { ChangeEvent, ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import { input, label } from './index.css'

export type InputProps = {
  className?: string
  title: string
  close?: boolean
  moving?: boolean
  defaultValue?: string
  onChange?: () => void
} & ComponentPropsWithoutRef<'input'>

/**
 * @name Input component
 * Inputを表示するコンポーネント
 * @param {string} className - props className
 * @returns {JSX.Element}
 * @example <Input a={1} />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, title, defaultValue, onChange, close, moving, ...props },
    ref,
  ): JSX.Element => {
    const [currentValue, setCurrentValue] = useState<string>(defaultValue || '')

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
      if (e.target.value) {
        setCurrentValue(e.target.value)
      } else {
        setCurrentValue('')
      }

      // 外部から渡されたonChangeプロパティを呼び出す
      if (onChange) {
        onChange(e)
      }
    }

    return (
      <label className={clsx(label, className)}>
        {title}
        <input
          className={input({ currentValue: Boolean(currentValue), close, moving })}
          onChange={handleChange}
          ref={ref}
          placeholder='input'
          {...props}
        />
      </label>
    )
  },
)
