'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const compose = require ('./internal/compose_');


module.exports = equals => ({

  //  (x `compose` y) `compose` z = x `compose` (y `compose` z)
  associativity: assert.forall3 (x => y => z =>
    Z.Semigroupoid.test (x) &&
    Z.Semigroupoid.test (y) &&
    Z.Semigroupoid.test (z) &&
    equals (compose (compose (x) (y)) (z),
            compose (x) (compose (y) (z)))
  ),

});
