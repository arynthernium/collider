# collider

A function to test how long it takes to generate the same value twice (or to find a "collision").

WARNING: This module has no resource limitation at all. Your system will likely run out of RAM before you find a collision with functions that can return a lot of permutations. For example, you will *most likely* not be able to find a collision with an RFC-compliant random UUID.

Usage:
```js
// ES6
import { collider } from '@arynthernium/collider';
// CommonJS
const { collider } = require('@arynthernium/collider');

collider(func, ...args);
// where func is the function you want to run and any arguments after that get passed to the function.
```