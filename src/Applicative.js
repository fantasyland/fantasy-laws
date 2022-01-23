'use strict';

const Z = require ('sanctuary-type-classes');

const $ = require ('./internal/$');
const ap = require ('./internal/ap');
const assert = require ('./internal/assert');
const identity = require ('./internal/identity');
const of = require ('./internal/of');


module.exports = (equals, A) => {
  const pure = of (A);
  return {

    //  pure identity <*> v = v
    identity: assert.forall1 (v =>
      Z.Applicative.test (v) &&
      equals (ap (pure (identity)) (v),
              v)
    ),

    //  pure f <*> pure x = pure (f x)
    homomorphism: assert.forall2 (f => x =>
      equals (ap (pure (f)) (pure (x)),
              pure (f (x)))
    ),

    //  u <*> pure y = pure ($ y) <*> u
    interchange: assert.forall2 (u => y =>
      Z.Applicative.test (u) &&
      equals (ap (u) (pure (y)),
              ap (pure ($ (y))) (u))
    ),

  };
};
