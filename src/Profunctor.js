'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const compose = require ('./internal/compose_');
const identity = require ('./internal/identity');
const promap = require ('./internal/promap');


module.exports = equals => ({

  //  promap identity identity p = p
  identity: assert.forall1 (p =>
    Z.Profunctor.test (p) &&
    equals (promap (identity) (identity) (p),
            p)
  ),

  //  promap (f . g) (h . i) p = (promap g h . promap f i) p
  composition: assert.forall5 (p => f => g => h => i =>
    Z.Profunctor.test (p) &&
    equals (promap (compose (f) (g)) (compose (h) (i)) (p),
            compose (promap (g) (h)) (promap (f) (i)) (p))
  ),

});
