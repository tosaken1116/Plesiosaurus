import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
import type { HTMLAttributes } from 'react';
import type { Sprinkles } from '../../layout.css';
type JustifyContent = Sprinkles['justifyContent'];
type AlignItems = Sprinkles['alignItems'];
export type StackProps = {
    component?: React.ElementType;
    direction?: 'row' | 'column';
    divider?: React.ReactNode;
    spacing?: string;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    className?: string;
    children?: React.ReactNode[] | React.ReactNode;
} & React.HTMLProps<HTMLElement> & HTMLAttributes<HTMLElement>;
/**
 * @name Stack component
 * Stackを表示するコンポーネント
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Stack a={1} />
 */
export declare const Stack: import("react").ForwardRefExoticComponent<Omit<StackProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
export {};
//# sourceMappingURL=index.d.ts.map