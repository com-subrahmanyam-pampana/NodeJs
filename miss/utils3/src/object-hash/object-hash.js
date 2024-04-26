/*Generate hashes from objects and values in 
node and the browser. Uses node.js crypto module 
for hashing. Supports SHA1 and many others 
(depending on the platform) as well 
as custom streams (e.g. CRC32). */

var hash = require('object-hash');

const data=hash({foo: 'bar'}) // => '67b69634f9880a282c14a0f0cb7ba20cf5d677e9'
hash([1, 2, 2.718, 3.14159]) // => '136b9b88375971dff9f1af09d7356e3e04281951'

console.log(data)