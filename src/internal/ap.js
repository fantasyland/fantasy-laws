import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  ap :: Apply f => f (a -> b) -> f a -> f b
export default curry2 (Z.ap);
