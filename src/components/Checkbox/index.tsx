import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

export type CheckboxProps = {
  className?: string
}

/**
 * @name Checkbox component
 * Checkboxを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Checkbox a={1} />
 */
export const Checkbox = ({ className }: CheckboxProps): JSX.Element => <>{className} </>
