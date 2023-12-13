import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import { clsx } from 'clsx'

import { root } from './index.css'

export type SwitchProps = {
  className?: string
}

/**
 * @name Switch component
 * Switchを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Switch a={1} />
 */
export const Switch = ({ className }: SwitchProps): JSX.Element => (
  <div className={clsx(root, className)}>
    <input type='checkbox' />
  </div>
)

// A form label must be associated with a control.
