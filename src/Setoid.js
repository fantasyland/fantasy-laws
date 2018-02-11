'use strict';

var Z = require('sanctuary-type-classes');

var assert = require('./internal/assert');


module.exports = {

  //  a `equals` a = true
  reflexivity: assert.forall1(function(a) {
    return Z.Setoid.test(a) &&
           Z.equals(a, a);
  }),

  //  a `equals` b = b `equals` a
  symmetry: assert.forall2(function(a, b) {
    return Z.Setoid.test(a) &&
           Z.Setoid.test(b) &&
           Z.equals(a, b) === Z.equals(b, a);
  }),

  //  a `equals` b && b `equals` c => a `equals` c
  transitivity: assert.forall3(function(a, b, c) {
    return Z.Setoid.test(a) &&
           Z.Setoid.test(b) &&
           Z.Setoid.test(c) &&
           (Z.equals(a, b) && Z.equals(b, c) ? Z.equals(a, c) : true);
  })

};
