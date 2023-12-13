import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

export type BadgeProps = { className?: string }

/**
 * @name Badge component
 * Badgeを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Badge a={1} />
 */
export const Badge = ({ className }: BadgeProps): JSX.Element => <>{className}</>
