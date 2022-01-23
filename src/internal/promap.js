import Z from 'sanctuary-type-classes';

import curry3 from './curry3.js';

//  promap :: Profunctor p => (a -> b) -> (c -> d) -> p b c -> p a d
export default curry3 (Z.promap);
