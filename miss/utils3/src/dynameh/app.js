/*node-zlib - Simple, synchronous
 deflate/inflate(reduce size) for node.js buffers */

 var Buffer = require('buffer').Buffer;
var zlib = require('zlib');

var input = new Buffer('lorem ipsum dolor sit amet');
var compressed = zlib.deflate(input);
var output = zlib.inflate(compressed);
console.log(output)
