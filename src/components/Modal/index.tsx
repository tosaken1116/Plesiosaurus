import 'modern-normalize/modern-normalize.css'
import '../../reset.css'

export type ModalProps = {
  className?: string
}

/**
 * @name Modal component
 * Modalを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Modal a={1} />
 */
export const Modal = ({ className }: ModalProps): JSX.Element => <>{className}</>
