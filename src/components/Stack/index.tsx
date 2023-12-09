import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

export type StackProps = {
  className?: string
}

/**
 * @name Stack component
 * Stackを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Stack a={1} />
 */
export const Stack = ({ className }: StackProps): JSX.Element => (
  <div className={className} data-testId='stack'>
    Stack
  </div>
)
