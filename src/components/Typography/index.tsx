import 'modern-normalize/modern-normalize.css'
import '../../reset.css'
import { clsx } from 'clsx'

export type TypographyProps = {
  className?: string
}

/**
 * @name Typography component
 * Typographyを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Typography a={1} />
 */
export const Typography = ({ className }: TypographyProps): JSX.Element => (
  <p className={clsx(className)} />
)
