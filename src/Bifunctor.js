'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const bimap = require ('./internal/bimap');
const compose = require ('./internal/compose_');
const identity = require ('./internal/identity');


module.exports = equals => ({

  //  bimap identity identity p = p
  identity: assert.forall1 (p =>
    Z.Bifunctor.test (p) &&
    equals (bimap (identity) (identity) (p),
            p)
  ),

  //  bimap (f . g) (h . i) p = (bimap f h . bimap g i) p
  composition: assert.forall5 (p => f => g => h => i =>
    Z.Bifunctor.test (p) &&
    equals (bimap (compose (f) (g)) (compose (h) (i)) (p),
            compose (bimap (f) (h)) (bimap (g) (i)) (p))
  ),

});
