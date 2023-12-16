import { j as f } from "../../node_modules/react/jsx-runtime.js";
import "../../node_modules/modern-normalize/modern-normalize.css.js";
import "../../reset.css.js";
import { forwardRef as i } from "react";
import { clsx as n } from "../../node_modules/clsx/dist/clsx.js";
import { fontStyles as a } from "../../font.css.js";
const R = i(
  ({ component: o, variant: r, children: t, className: m, ...p }, s) => {
    const e = o;
    return /* @__PURE__ */ f.jsx(e, { className: n(a[r], m), ref: s, ...p, children: t });
  }
);
export {
  R as Typography
};
