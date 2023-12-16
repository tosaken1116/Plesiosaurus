import { clsx as t } from "../../../../node_modules/clsx/dist/clsx.js";
import { hoverSlideAnimation as o, slideAnimation as a } from "./style.css.js";
const m = (i = {
  direction: "bottom",
  duration: "0.3s",
  delay: "0s"
}, n = !1) => ({
  className: t(
    n ? o({ direction: i.direction }) : a({ direction: i.direction })
  ),
  style: {
    "--animation-duration": i.duration,
    "--animation-delay": i.delay
  }
});
export {
  m as genAnimation
};