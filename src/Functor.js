'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const compose = require ('./internal/compose_');
const identity = require ('./internal/identity');
const map = require ('./internal/map');


module.exports = equals => ({

  //  identity <$> u = u
  identity: assert.forall1 (u =>
    Z.Functor.test (u) &&
    equals (map (identity) (u),
            u)
  ),

  //  (f . g) <$> u = f <$> g <$> u
  composition: assert.forall3 (u => f => g =>
    Z.Functor.test (u) &&
    equals (map (compose (f) (g)) (u),
            compose (map (f)) (map (g)) (u))
  ),

});
