import Z from 'sanctuary-type-classes';

import curry3 from './curry3.js';

//  chainRec :: ChainRec m => TypeRep m -> ((a -> c, b -> c, a) -> m c) -> a -> m b
export default curry3 (Z.chainRec);
