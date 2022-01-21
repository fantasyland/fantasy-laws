'use strict';

const L = require ('..');
const Z = require ('sanctuary-type-classes');

const ls = ((Object.keys (L)).sort ());
const zs = ((Object.keys (Z)).sort ()).filter (k => Z[k].constructor['@@type'] === 'sanctuary-type-classes/TypeClass@1');

const col = '                    ';
let valid = true;
while (ls.length > 0 || zs.length > 0) {
  console.log (zs.length === 0 || ls[0] < zs[0] ? (valid = false, ls.shift ()) :
               ls.length === 0 || zs[0] < ls[0] ? (valid = false, col + zs.shift ()) :
                                                  (ls.shift () + col).slice (0, col.length) + zs.shift ());
}
process.exit (valid ? 0 : 1);
