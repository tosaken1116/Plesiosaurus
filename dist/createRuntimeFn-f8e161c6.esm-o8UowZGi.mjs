function O(r, e) {
  if (typeof r != "object" || r === null)
    return r;
  var a = r[Symbol.toPrimitive];
  if (a !== void 0) {
    var t = a.call(r, e || "default");
    if (typeof t != "object")
      return t;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(r);
}
function d(r) {
  var e = O(r, "string");
  return typeof e == "symbol" ? e : String(e);
}
function c(r, e, a) {
  return e = d(e), e in r ? Object.defineProperty(r, e, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = a, r;
}
function o(r, e) {
  var a = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(r);
    e && (t = t.filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable;
    })), a.push.apply(a, t);
  }
  return a;
}
function v(r) {
  for (var e = 1; e < arguments.length; e++) {
    var a = arguments[e] != null ? arguments[e] : {};
    e % 2 ? o(Object(a), !0).forEach(function(t) {
      c(r, t, a[t]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
      Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
    });
  }
  return r;
}
function p(r, e) {
  var a = {};
  for (var t in r)
    a[t] = e(r[t], t);
  return a;
}
var y = (r, e, a) => {
  for (var t of Object.keys(r)) {
    var n;
    if (r[t] !== ((n = e[t]) !== null && n !== void 0 ? n : a[t]))
      return !1;
  }
  return !0;
}, P = (r) => {
  var e = (a) => {
    var t = r.defaultClassName, n = v(v({}, r.defaultVariants), a);
    for (var f in n) {
      var l, i = (l = n[f]) !== null && l !== void 0 ? l : r.defaultVariants[f];
      if (i != null) {
        var u = i;
        typeof u == "boolean" && (u = u === !0 ? "true" : "false");
        var s = (
          // @ts-expect-error
          r.variantClassNames[f][u]
        );
        s && (t += " " + s);
      }
    }
    for (var [m, b] of r.compoundVariants)
      y(m, n, r.defaultVariants) && (t += " " + b);
    return t;
  };
  return e.variants = () => Object.keys(r.variantClassNames), e.classNames = {
    get base() {
      return r.defaultClassName.split(" ")[0];
    },
    get variants() {
      return p(r.variantClassNames, (a) => p(a, (t) => t.split(" ")[0]));
    }
  }, e;
};
export {
  P as c
};
