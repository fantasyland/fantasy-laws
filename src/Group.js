'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const concat = require ('./internal/concat');
const invert = require ('./internal/invert');


module.exports = (equals, G) => {
  const empty = Z.empty (G);
  return {

    //  invert <> g = empty
    leftInverse: assert.forall1 (g =>
      Z.Group.test (g) &&
      Z.Group.test (empty) &&
      equals (concat (invert (g)) (g),
              empty)
    ),

    //  g <> invert = empty
    rightInverse: assert.forall1 (g =>
      Z.Group.test (g) &&
      Z.Group.test (empty) &&
      equals (concat (g) (invert (g)),
              empty)
    ),

  };
};
