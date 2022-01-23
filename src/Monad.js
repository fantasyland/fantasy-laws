'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const chain = require ('./internal/chain');
const of = require ('./internal/of');


module.exports = (equals, M) => {
  const pure = of (M);
  return {

    //  pure x >>= f = f x
    leftIdentity: assert.forall2 (f => x =>
      equals (chain (f) (pure (x)),
              f (x))
    ),

    //  m >>= pure = m
    rightIdentity: assert.forall1 (m =>
      Z.Monad.test (m) &&
      equals (chain (pure) (m),
              m)
    ),

  };
};
