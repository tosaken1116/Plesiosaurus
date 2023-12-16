import { AnimationFactory as a } from "./variant/AnimationFactory.js";
const i = (t, n = !1) => {
  if (!t)
    return { className: "", style: {} };
  const { key: e, option: o } = t, r = a[e];
  if (r)
    return r(o, n);
  throw new Error("Invalid animation type");
}, c = (t) => {
  const { in: n, hover: e } = t;
  return !n && !e ? { className: "", style: {} } : n ? i(n) : i(e, !0);
};
export {
  c as resolveAnimation
};
