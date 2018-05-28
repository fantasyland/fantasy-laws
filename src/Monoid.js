'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var concat = require ('./internal/concat');


module.exports = function(equals, M) {
  var empty = Z.empty (M);
  return {

    //  empty <> m = m
    leftIdentity: assert.forall1 (function(m) {
      return Z.Monoid.test (m) &&
             Z.Monoid.test (empty) &&
             equals (concat (empty) (m),
                     m);
    }),

    //  m <> empty = m
    rightIdentity: assert.forall1 (function(m) {
      return Z.Monoid.test (m) &&
             Z.Monoid.test (empty) &&
             equals (concat (m) (empty),
                     m);
    })

  };
};
