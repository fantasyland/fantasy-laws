import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import concat from './internal/concat.js';
import invert from './internal/invert.js';


export default (equals, G) => {
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
