/// <reference types="react" />
import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
export type DividerProps = {
    orientation?: 'horizontal' | 'vertical';
    className?: string;
} & React.HTMLProps<HTMLDivElement>;
/**
 * @name Divider component
 * Dividerを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Divider a={1} />
 */
declare const Divider: import("react").ForwardRefExoticComponent<Omit<DividerProps, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export { Divider };
//# sourceMappingURL=index.d.ts.map