import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import compose from './internal/compose_.js';
import extend from './internal/extend.js';


export default equals => ({

  //  (extend f . extend g) w = extend (f . extend g) w
  associativity: assert.forall3 (w => f => g =>
    Z.Extend.test (w) &&
    equals (compose (extend (f)) (extend (g)) (w),
            extend (compose (f) (extend (g))) (w))
  ),

});
