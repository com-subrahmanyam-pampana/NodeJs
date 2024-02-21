var cpus =require('node:os');

console.log(cpus.arch());
console.log(cpus.cpus().length);