

const { Buffer } = require('node:buffer');

/* Creates a zero-filled Buffer of length 10.*/
const buf1=Buffer.alloc(4);
buf1[0]=23;
buf1[1]=20;
buf1[2]=100;
buf1[4]=99;
console.log(buf1)
console.log("first element is ",buf1[0])