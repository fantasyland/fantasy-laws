'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var compose = require ('./internal/compose_');
var extend = require ('./internal/extend');


module.exports = function(equals) {
  return {

    //  (extend f . extend g) w = extend (f . extend g) w
    associativity: assert.forall3 (function(w, f, g) {
      return Z.Extend.test (w) &&
             equals (compose (extend (f)) (extend (g)) (w),
                     extend (compose (f) (extend (g))) (w));
    })

  };
};
