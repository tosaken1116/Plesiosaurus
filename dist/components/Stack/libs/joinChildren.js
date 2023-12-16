import { j as o } from "../../../jsx-runtime-NmMXPjeo.mjs";
import { Children as n } from "react";
function s(r, i) {
  return n.map(r, (m, t) => /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    m,
    t < n.count(r) - 1 && i(t.toString())
  ] }));
}
export {
  s as joinChildren
};
