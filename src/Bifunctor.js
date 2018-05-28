'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var bimap = require ('./internal/bimap');
var compose = require ('./internal/compose_');
var identity = require ('./internal/identity');


module.exports = function(equals) {
  return {

    //  bimap identity identity p = p
    identity: assert.forall1 (function(p) {
      return Z.Bifunctor.test (p) &&
             equals (bimap (identity) (identity) (p),
                     p);
    }),

    //  bimap (f . g) (h . i) p = (bimap f h . bimap g i) p
    composition: assert.forall5 (function(p, f, g, h, i) {
      return Z.Bifunctor.test (p) &&
             equals (bimap (compose (f) (g)) (compose (h) (i)) (p),
                     compose (bimap (f) (h)) (bimap (g) (i)) (p));
    })

  };
};
