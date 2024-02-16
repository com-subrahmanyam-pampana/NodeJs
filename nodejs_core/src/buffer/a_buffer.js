const { Buffer } = require('node:buffer');

/* Creates a zero-filled Buffer of length 10.*/
const buf1=Buffer.alloc(10);
console.log(buf1)

/* Creates a 1-filled Buffer of length 10.*/
const buf2 = Buffer.alloc(10, 1);

console.log(buf2)

const buf3 =new Buffer.alloc(5,'Hello','utf8')
console.log(buf3)
console.log(buf3.toString())
console.log(buf3.toJSON())


/* Creates a Buffer containing the bytes [1, 2, 3]*/
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4)