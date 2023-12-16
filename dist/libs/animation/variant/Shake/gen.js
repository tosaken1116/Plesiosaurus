import { hoverShakeAnimation as i, shakeAnimation as o } from "./style.css.js";
const e = (a = {
  duration: "1s",
  delay: "0s"
}, n = !1) => ({
  className: n ? i() : o(),
  style: {
    "--animation-duration": a.duration,
    "--animation-delay": a.delay
  }
});
export {
  e as genAnimation
};
