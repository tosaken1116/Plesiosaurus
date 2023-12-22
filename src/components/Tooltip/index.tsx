import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { useState } from 'react'

import { container, toolTip } from './index.css'

export type TooltipProps = {
  children?: React.ReactNode
  text: string
  width?: 's' | 'm' | 'l'
  moving?: boolean
}

/**
 * @name Tooltip component
 * Tooltipを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Tooltip a={1} />
 */
export const Tooltip = ({ children, text, width, moving }: TooltipProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div
      onMouseMove={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className={container}
    >
      {children}
      {isVisible && <div className={toolTip({ width, moving })}>{text}</div>}
    </div>
  )
}
