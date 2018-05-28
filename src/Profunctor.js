'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var compose = require ('./internal/compose_');
var identity = require ('./internal/identity');
var promap = require ('./internal/promap');


module.exports = function(equals) {
  return {

    //  promap identity identity p = p
    identity: assert.forall1 (function(p) {
      return Z.Profunctor.test (p) &&
             equals (promap (identity) (identity) (p),
                     p);
    }),

    //  promap (f . g) (h . i) p = (promap g h . promap f i) p
    composition: assert.forall5 (function(p, f, g, h, i) {
      return Z.Profunctor.test (p) &&
             equals (promap (compose (f) (g)) (compose (h) (i)) (p),
                     compose (promap (g) (h)) (promap (f) (i)) (p));
    })

  };
};
