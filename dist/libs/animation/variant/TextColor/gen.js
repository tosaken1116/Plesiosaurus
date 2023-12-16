import { c as r } from "../../../../clsx-7d8NmkQq.mjs";
import { hoverTextColorAnimation as t } from "./style.css.js";
const n = (a = {
  afterColor: "primary",
  duration: "0.3s",
  delay: "1s",
  easing: "ease"
}, e) => e ? {
  className: r(
    t({ afterColor: a.afterColor, easing: a.easing })
  ),
  style: {
    "--transition-duration": a.duration,
    "--transition-delay": a.delay
  }
} : { className: "", style: {} };
export {
  n as genAnimation
};
