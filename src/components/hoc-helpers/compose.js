const compose = (...funcs) => comp => funcs
  .reduceRight((acc, f) => f(acc), comp);

export default compose;
