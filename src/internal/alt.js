import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  alt :: Alt f => f a -> f a -> f a
export default curry2 (Z.alt);
