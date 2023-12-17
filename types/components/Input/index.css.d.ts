export declare const roundedKeyFrame: string;
export declare const label: string;
export declare const input: import("@vanilla-extract/recipes").RuntimeFn<{
    close: {
        true: {
            width: number;
            selectors: {
                '&:hover': {
                    width: number;
                    outline: number;
                    borderColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                    boxShadow: "1px 1px 6px black";
                };
            };
        };
    };
    currentValue: {
        true: {
            width: number;
        };
    };
    moving: {
        true: {
            selectors: {
                "&:focus": {
                    animation: `${string} 1.5s infinite`;
                };
            };
        };
    };
}>;
//# sourceMappingURL=index.css.d.ts.map