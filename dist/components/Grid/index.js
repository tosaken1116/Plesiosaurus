import { j as n } from "../../jsx-runtime-NmMXPjeo.mjs";
/* empty css                               */
/* empty css                    */
import { forwardRef as c } from "react";
import { c as l } from "../../clsx-7d8NmkQq.mjs";
import { sprinkles as x } from "../../layout.css.js";
const k = c(
  ({
    component: r = "div",
    gridTemplateColumns: o = 12,
    gridTemplateRows: t = 12,
    columnSpacing: s = 1,
    rowSpacing: i = 1,
    className: m,
    ref: a,
    children: p,
    ...d
  }) => {
    const e = r;
    return /* @__PURE__ */ n.jsx(
      e,
      {
        className: l(
          x({
            display: { xs: "grid" },
            gridTemplateColumns: o,
            gridTemplateRows: t,
            columnGap: s,
            rowGap: i
          }),
          m
        ),
        "data-testId": "grid",
        ref: a,
        ...d,
        children: p
      }
    );
  }
), v = c(
  ({
    component: r = "div",
    gridColumnStart: o,
    gridColumnEnd: t,
    gridRowStart: s,
    gridRowEnd: i,
    className: m,
    ref: a,
    children: p,
    ...d
  }) => {
    const e = r;
    return /* @__PURE__ */ n.jsx(
      e,
      {
        className: l(
          x({
            display: "block",
            gridColumnStart: o,
            gridColumnEnd: t,
            gridRowStart: s,
            gridRowEnd: i
          }),
          m
        ),
        "data-testId": "grid",
        ref: a,
        ...d,
        children: p
      }
    );
  }
);
export {
  k as Grid,
  v as GridItem
};
