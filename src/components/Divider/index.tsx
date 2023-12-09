import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

export type DividerProps = {
  className?: string
}

/**
 * @name Divider component
 * Dividerを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Divider a={1} />
 */
export const Divider = ({ className }: DividerProps): JSX.Element => <>{className} </>
