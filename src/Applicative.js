import Z from 'sanctuary-type-classes';

import $ from './internal/$.js';
import ap from './internal/ap.js';
import assert from './internal/assert.js';
import identity from './internal/identity.js';
import of from './internal/of.js';


export default (equals, A) => {
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
