'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var concat = require ('./internal/concat');
var invert = require ('./internal/invert');


module.exports = function(equals, G) {
  var empty = Z.empty (G);
  return {

    //  invert <> g = empty
    leftInverse: assert.forall1 (function(g) {
      return Z.Group.test (g) &&
             Z.Group.test (empty) &&
             equals (concat (invert (g)) (g),
                     empty);
    }),

    //  g <> invert = empty
    rightInverse: assert.forall1 (function(g) {
      return Z.Group.test (g) &&
             Z.Group.test (empty) &&
             equals (concat (g) (invert (g)),
                     empty);
    })

  };
};
