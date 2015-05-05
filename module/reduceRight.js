/**
 * @module 1-liners/reduceRight
 * 
 * Same as `[1, 2, 3].reduceRight(sub)`.
 * 
 * @example
 * 
 * 	var reduceRight = require('1-liners/reduceRight');
 * 
 * 	reduceRight(sub, [1, 2, 3]); // => -4
 * 
 */
export default (reduce, arr) => arr.reduceRight(reduce);
