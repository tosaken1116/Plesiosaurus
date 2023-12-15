/* eslint-disable jsx-a11y/label-has-associated-control */
import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

import { toggleButtonInput, toggleButtonLabel } from './index.css'

/**
 * @name Switch component
 * Switchを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Switch a={1} />
 */
export const Switch = (): JSX.Element => (
  <label htmlFor='switch' className={toggleButtonLabel}>
    <input type='checkbox' className={toggleButtonInput} id='switch' />
  </label>
)

// A form label must be associated with a control.
