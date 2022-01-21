'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const concat = require ('./internal/concat');


module.exports = (equals, M) => {
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
