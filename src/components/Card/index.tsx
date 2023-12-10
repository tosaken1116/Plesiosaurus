import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

export type CardProps = {
  className?: string
}

/**
 * @name Card component
 * Cardを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Card a={1} />
 */
export const Card = ({ className }: CardProps): JSX.Element => <>{className}</>
