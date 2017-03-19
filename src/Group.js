'use strict';

var Z = require('sanctuary-type-classes');

var assert = require('./internal/assert');


module.exports = function(equals, G) {
  var empty = Z.empty(G);
  return {

    //  invert <> g = empty
    leftInverse: assert.forall1(function(g) {
      return Z.Group.test(g) &&
             equals(Z.concat(Z.invert(g), g),
                    empty);
    }),

    //  g <> invert = empty
    rightInverse: assert.forall1(function(g) {
      return Z.Group.test(g) &&
             equals(Z.concat(g, Z.invert(g)),
                    empty);
    })

  };
};
