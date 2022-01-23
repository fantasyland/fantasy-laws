import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  contramap :: Contravariant f => (b -> a) -> f a -> f b
export default curry2 (Z.contramap);
