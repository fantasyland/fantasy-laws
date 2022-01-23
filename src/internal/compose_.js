import Z from 'sanctuary-type-classes';

import curry2 from './curry2.js';

//  compose :: Semigroupoid c => c j k -> c i j -> c i k
export default curry2 (Z.compose);
