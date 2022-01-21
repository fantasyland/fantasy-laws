'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const compose = require ('./internal/compose_');
const contramap = require ('./internal/contramap');
const identity = require ('./internal/identity');


module.exports = equals => ({

  //  contramap identity u = u
  identity: assert.forall1 (u =>
    Z.Contravariant.test (u) &&
    equals (contramap (identity) (u),
            u)
  ),

  //  contramap (f . g) u = (contramap g . contramap f) u
  composition: assert.forall3 (u => f => g =>
    Z.Contravariant.test (u) &&
    equals (contramap (compose (f) (g)) (u),
            compose (contramap (g)) (contramap (f)) (u))
  ),

});
