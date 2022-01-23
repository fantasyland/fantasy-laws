import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';


export default {

  //  a `equals` a = true
  reflexivity: assert.forall1 (a =>
    Z.Setoid.test (a) &&
    Z.equals (a, a)
  ),

  //  a `equals` b = b `equals` a
  symmetry: assert.forall2 (a => b =>
    Z.Setoid.test (a) &&
    Z.Setoid.test (b) &&
    Z.equals (a, b) === Z.equals (b, a)
  ),

  //  a `equals` b && b `equals` c => a `equals` c
  transitivity: assert.forall3 (a => b => c =>
    Z.Setoid.test (a) &&
    Z.Setoid.test (b) &&
    Z.Setoid.test (c) &&
    (Z.equals (a, b) && Z.equals (b, c) ? Z.equals (a, c) : true)
  ),

};
