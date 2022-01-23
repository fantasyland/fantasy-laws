import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import compose from './internal/compose_.js';
import extend from './internal/extend.js';
import extract from './internal/extract.js';


export default equals => ({

  //  extend extract w = w
  leftIdentity: assert.forall1 (w =>
    Z.Comonad.test (w) &&
    equals (extend (extract) (w),
            w)
  ),

  //  (extract . extend f) w = f w
  rightIdentity: assert.forall2 (w => f =>
    Z.Comonad.test (w) &&
    equals (compose (extract) (extend (f)) (w),
            f (w))
  ),

});
