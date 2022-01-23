import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import concat from './internal/concat.js';


export default (equals, M) => {
  const empty = Z.empty (M);
  return {

    //  empty <> m = m
    leftIdentity: assert.forall1 (m =>
      Z.Monoid.test (m) &&
      Z.Monoid.test (empty) &&
      equals (concat (empty) (m),
              m)
    ),

    //  m <> empty = m
    rightIdentity: assert.forall1 (m =>
      Z.Monoid.test (m) &&
      Z.Monoid.test (empty) &&
      equals (concat (m) (empty),
              m)
    ),

  };
};
