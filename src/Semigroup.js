'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const concat = require ('./internal/concat');


module.exports = equals => ({

  //  (x <> y) <> z = x <> (y <> z)
  associativity: assert.forall3 (x => y => z =>
    Z.Semigroup.test (x) &&
    Z.Semigroup.test (y) &&
    Z.Semigroup.test (z) &&
    equals (concat (concat (x) (y)) (z),
            concat (x) (concat (y) (z)))
  ),

});
