import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import filter from './internal/filter.js';


export default equals => ({

  //  filter (\x -> p x && q x) v = filter q (filter p v)
  distributivity: assert.forall3 (v => p => q =>
    Z.Filterable.test (v) &&
    equals (filter (x => p (x) && q (x)) (v),
            filter (q) (filter (p) (v)))
  ),

  //  filter (\x -> True) v = v
  identity: assert.forall1 (v =>
    Z.Filterable.test (v) &&
    equals (filter (_ => true) (v),
            v)
  ),

  //  filter (\x -> False) v = filter (\x -> False) w
  annihilation: assert.forall2 (v => w =>
    Z.Filterable.test (v) &&
    Z.Filterable.test (w) &&
    equals (filter (_ => false) (v),
            filter (_ => false) (w))
  ),

});
