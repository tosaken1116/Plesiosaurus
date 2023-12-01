/** @format */

import { createGlobalTheme } from "@vanilla-extract/css";

export const vars = createGlobalTheme(":root", {
    background: {
        primary: "#0F172A",
        secondary: "#ffffff",
    },
    foreground: {
        primary: "#ffffff",
        secondary: "#000000",
    },
    radius: {
        lg: "50px",
        md: "10px",
        none: "0px",
    },
});
