import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

export type GridProps = {
  className?: string
}

/**
 * @name Grid component
 * Gridを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Grid a={1} />
 */
export const Grid = ({ className }: GridProps): JSX.Element => <>{className} </>
