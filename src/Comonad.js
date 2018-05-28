'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var compose = require ('./internal/compose_');
var extend = require ('./internal/extend');
var extract = require ('./internal/extract');


module.exports = function(equals) {
  return {

    //  extend extract w = w
    leftIdentity: assert.forall1 (function(w) {
      return Z.Comonad.test (w) &&
             equals (extend (extract) (w),
                     w);
    }),

    //  (extract . extend f) w = f w
    rightIdentity: assert.forall2 (function(w, f) {
      return Z.Comonad.test (w) &&
             equals (compose (extract) (extend (f)) (w),
                     f (w));
    })

  };
};
