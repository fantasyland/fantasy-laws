import Z from 'sanctuary-type-classes';

import assert from './internal/assert.js';
import compose from './internal/compose_.js';
import id from './internal/id.js';


export default equals => ({

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
