export declare const hoverBackGroundColorFadeAnimation: import("@vanilla-extract/recipes").RuntimeFn<{
    afterColor: {
        primary: {
            ':hover': {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        secondary: {
            ':hover': {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
        error: {
            ':hover': {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            };
        };
    };
    easing: {
        ease: {
            ':hover': {
                transitionTimingFunction: "ease";
            };
        };
        easeIn: {
            ':hover': {
                transitionTimingFunction: "ease-in";
            };
        };
        easeOut: {
            ':hover': {
                transitionTimingFunction: "ease-out";
            };
        };
        easeInOut: {
            ':hover': {
                transitionTimingFunction: "ease-in-out";
            };
        };
        linear: {
            ':hover': {
                transitionTimingFunction: "linear";
            };
        };
    };
}>;
//# sourceMappingURL=style.css.d.ts.map