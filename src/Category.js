'use strict';

const Z = require ('sanctuary-type-classes');

const assert = require ('./internal/assert');
const compose = require ('./internal/compose_');
const id = require ('./internal/id');


module.exports = equals => ({

  //  a `compose` id C = a
  leftIdentity: assert.forall2 (C => a =>
    Z.Category.test (a) &&
    equals (compose (a) (id (C)),
            a)
  ),

  //  id C `compose` a = a
  rightIdentity: assert.forall2 (C => a =>
    Z.Category.test (a) &&
    equals (compose (id (C)) (a),
            a)
  ),

});
