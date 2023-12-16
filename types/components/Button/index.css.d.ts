/** @format */
export declare const finalColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
export declare const button: import("@vanilla-extract/recipes").RuntimeFn<{
    state: {
        primary: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        secondary: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        error: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    outline: {
        primary: {
            border: `2.5px solid var(--${string})` | `2.5px solid var(--${string}, ${string})` | `2.5px solid var(--${string}, ${number})`;
        };
        secondary: {
            border: `2.5px solid var(--${string})` | `2.5px solid var(--${string}, ${string})` | `2.5px solid var(--${string}, ${number})`;
        };
        error: {
            border: `2.5px solid var(--${string})` | `2.5px solid var(--${string}, ${string})` | `2.5px solid var(--${string}, ${number})`;
        };
        none: {
            border: "none";
        };
    };
    radius: {
        lg: {
            borderRadius: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        md: {
            borderRadius: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        none: {
            borderRadius: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    typography: {
        'body-medium': {
            fontFamily: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontStyle: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    animations: {
        scaleUp: {
            selectors: {
                '&:hover': {
                    transform: "scale(1.1)";
                };
            };
        };
        scaleDown: {
            selectors: {
                '&:hover': {
                    transform: "scale(0.9)";
                };
            };
        };
        'primary--border': {
            selectors: {
                '&:hover': {
                    border: `2.5px solid var(--${string})` | `2.5px solid var(--${string}, ${string})` | `2.5px solid var(--${string}, ${number})`;
                };
            };
        };
        'secondary--border': {
            selectors: {
                '&:hover': {
                    border: `2.5px solid var(--${string})` | `2.5px solid var(--${string}, ${string})` | `2.5px solid var(--${string}, ${number})`;
                };
            };
        };
        'error--border': {
            selectors: {
                '&:hover': {
                    border: `2.5px solid var(--${string})` | `2.5px solid var(--${string}, ${string})` | `2.5px solid var(--${string}, ${number})`;
                };
            };
        };
    };
    transform: {
        ease: {
            transition: "transform 0.2s ease";
        };
        easeIn: {
            transition: "transform 0.2s ease-in";
        };
        easeOut: {
            transition: "transform 0.2s ease-out";
        };
        easeInOut: {
            transition: "transform 0.2s ease-in-out";
        };
        liner: {
            transition: "transform 0.2s liner";
        };
    };
    border: {
        ease: {
            transition: "border 0.3s ease";
        };
        easeIn: {
            transition: "border 0.3s ease-in";
        };
        easeOut: {
            transition: "border 0.3s ease-out";
        };
        easeInOut: {
            transition: "border 0.3s ease-in-out";
        };
        liner: {
            transition: "border 0.3s liner";
        };
    };
}>;
//# sourceMappingURL=index.css.d.ts.map