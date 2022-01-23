import Z from 'sanctuary-type-classes';

import ap from './internal/ap.js';
import assert from './internal/assert.js';
import compose from './internal/compose_.js';
import map from './internal/map.js';


export default equals => ({

  //  (.) <$> u <*> v <*> w = u <*> (v <*> w)
  composition: assert.forall3 (u => v => w =>
    Z.Apply.test (u) &&
    Z.Apply.test (v) &&
    Z.Apply.test (w) &&
    equals (ap (ap (map (compose) (u)) (v)) (w),
            ap (u) (ap (v) (w)))
  ),

});
