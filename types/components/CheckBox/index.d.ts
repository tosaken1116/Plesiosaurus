import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
import type { HTMLAttributes, ReactNode } from 'react';
export type CheckboxProps = {
    className?: string;
    customCheckbox?: CustomCheckBox;
    checked?: boolean;
    label?: ReactNode;
    color?: string;
} & HTMLAttributes<HTMLInputElement>;
type CustomCheckBox = {
    checked: ReactNode;
    unchecked: ReactNode;
};
/**
 * @name Checkbox component
 * Checkboxを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Checkbox a={1} />
 */
export declare const Checkbox: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    customCheckbox?: CustomCheckBox | undefined;
    checked?: boolean | undefined;
    label?: ReactNode;
    color?: string | undefined;
} & HTMLAttributes<HTMLInputElement> & import("react").RefAttributes<HTMLInputElement>>;
export {};
//# sourceMappingURL=index.d.ts.map