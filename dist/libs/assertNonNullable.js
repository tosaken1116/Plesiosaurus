const n = "Expected value should be neither null nor undefined.", o = (e) => {
  if (!e)
    throw new Error(n);
};
export {
  o as assertNonNullable
};
