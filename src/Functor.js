'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var compose = require ('./internal/compose_');
var identity = require ('./internal/identity');
var map = require ('./internal/map');


module.exports = function(equals) {
  return {

    //  identity <$> u = u
    identity: assert.forall1 (function(u) {
      return Z.Functor.test (u) &&
             equals (map (identity) (u),
                     u);
    }),

    //  (f . g) <$> u = f <$> g <$> u
    composition: assert.forall3 (function(u, f, g) {
      return Z.Functor.test (u) &&
             equals (map (compose (f) (g)) (u),
                     compose (map (f)) (map (g)) (u));
    })

  };
};
