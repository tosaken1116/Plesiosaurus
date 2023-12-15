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
  <div>
    {/* トグルボタンを作るためにlabelが必要 */}
    {/* labelだけにするとA form label must be associated with a control が起きる */}
    {/* 仕方なく文字列入れてます */}
    <label className={toggleButtonLabel}>
      toggle
      <input type='checkbox' className={toggleButtonInput} />
    </label>
  </div>
)

// A form label must be associated with a control.
