import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  concat :: Semigroup a => a -> a -> a
export default curry2 (Z.concat);
