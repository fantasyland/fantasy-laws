import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  of :: Applicative f => TypeRep f -> a -> f a
export default curry2 (Z.of);
