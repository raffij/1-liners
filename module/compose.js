/**
 * @module 1-liners/compose
 * 
 * Compose a new function from two given functions.
 * 
 * @example
 * 
 * 	var compose = require('1-liners/compose');
 * 
 * 	compose(f, g)(1, 2) === f(g(1, 2));
 * 
 */
export default (f, g) => (...args) => f(g(...args));
