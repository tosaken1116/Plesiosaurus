import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import { forwardRef } from 'react'

export type RadioButtonProps = {
  className?: string
}

/**
 * @name RadioButton component
 * RadioButtonを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <RadioButton a={1} />
 */
export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ className }, ref) => <input ref={ref} className={className} type='radio' />,
)
