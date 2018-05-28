'use strict';

var Z = require ('sanctuary-type-classes');

var assert = require ('./internal/assert');
var compose = require ('./internal/compose_');
var id = require ('./internal/id');


module.exports = function(equals) {
  return {

    //  a `compose` id C = a
    leftIdentity: assert.forall2 (function(C, a) {
      return Z.Category.test (a) &&
             equals (compose (a) (id (C)),
                     a);
    }),

    //  id C `compose` a = a
    rightIdentity: assert.forall2 (function(C, a) {
      return Z.Category.test (a) &&
             equals (compose (id (C)) (a),
                     a);
    })

  };
};
