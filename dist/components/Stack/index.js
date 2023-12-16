import { j as r } from "../../jsx-runtime-NmMXPjeo.mjs";
/* empty css                               */
/* empty css                    */
import { forwardRef as x } from "react";
import { c as j } from "../../clsx-7d8NmkQq.mjs";
import { sprinkles as d } from "../../layout.css.js";
import { spacingStyle as g } from "./index.css.js";
import { joinChildren as k } from "./libs/joinChildren.js";
const E = x(
  ({
    component: t = "div",
    direction: o,
    divider: s,
    spacing: e,
    justifyContent: m,
    alignItems: p,
    className: n,
    ref: a,
    children: i,
    ...c
  }) => {
    const f = t;
    return /* @__PURE__ */ r.jsx(
      f,
      {
        className: j(
          d({
            display: "flex",
            flexDirection: o,
            justifyContent: m,
            alignItems: p
          }),
          g({ flexDirection: o }),
          n
        ),
        "data-testId": "stack",
        ref: a,
        ...c,
        style: { "--spacing": e },
        children: s ? k(i, (l) => /* @__PURE__ */ r.jsx(y, { children: s }, l)) : i
      }
    );
  }
), y = ({ children: t }) => /* @__PURE__ */ r.jsx(r.Fragment, { children: t });
export {
  E as Stack
};
