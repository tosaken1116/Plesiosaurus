import { genAnimation as n } from "./Slide/gen.js";
import { genAnimation as o } from "./BackGroundColorFade/gen.js";
import { genAnimation as i } from "./TextColor/gen.js";
import { genAnimation as m } from "./Squeeze/gen.js";
import { genAnimation as t } from "./Shake/gen.js";
const s = {
  slide: n,
  bgColorFade: o,
  textColor: i,
  squeeze: m,
  shake: t
};
export {
  s as AnimationFactory
};
