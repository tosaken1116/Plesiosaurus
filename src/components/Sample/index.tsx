import type { FC } from "react";

import { clsx } from "clsx";

import { root } from "./index.css";

type Props = {
    className?: string;
};

export const Sample: FC<Props> = ({ className }) => (
    <p className={clsx(root, className)}>this is ui of Sample </p>
);
