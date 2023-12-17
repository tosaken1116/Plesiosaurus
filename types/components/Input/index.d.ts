import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
import type { ComponentPropsWithoutRef } from 'react';
export type InputProps = {
    className?: string;
    title: string;
    close?: boolean;
    moving?: boolean;
    defaultValue?: string;
    onChange?: () => void;
} & ComponentPropsWithoutRef<'input'>;
/**
 * @name Input component
 * Inputを表示するコンポーネント
 * @param {string} className - props className
 * @returns {JSX.Element}
 * @example <Input a={1} />
 */
export declare const Input: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    title: string;
    close?: boolean | undefined;
    moving?: boolean | undefined;
    defaultValue?: string | undefined;
    onChange?: (() => void) | undefined;
} & Omit<import("react").DetailedHTMLProps<import("react").InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
//# sourceMappingURL=index.d.ts.map