import { hoverBackGroundColorFadeAnimation as o } from "./style.css.js";
const n = (a = {
  afterColor: "primary",
  easing: "ease",
  duration: "0.3s",
  delay: "0s"
}) => ({
  className: o({
    afterColor: a.afterColor,
    easing: a.easing
  }),
  style: { "--transition-duration": a.duration, "--transition-delay": a.delay }
});
export {
  n as genAnimation
};
