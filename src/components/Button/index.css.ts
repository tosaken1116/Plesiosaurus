/** @format */

import { style, styleVariants } from "@vanilla-extract/css";

import { vars } from "../../global.css";

const button = style({
    display: "inline-flex",
    padding: "8px 16px",
    justifyContent: "center",
    alignItems: "center",
});

export const states = styleVariants({
    primary: [
        button,
        {
            background: vars.background.primary,
            color: vars.foreground.primary,
        },
    ],
    secondary: [
        button,
        {
            background: vars.background.secondary,
            color: vars.foreground.secondary,
        },
    ],
});

export const radius = styleVariants({
    lg: {
        borderRadius: vars.radius.lg,
    },
    md: {
        borderRadius: vars.radius.md,
    },
    none: {
        borderRadius: vars.radius.none,
    },
});
