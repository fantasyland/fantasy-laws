import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import chain from './internal/chain.js';
import of from './internal/of.js';


export default (equals, M) => {
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
