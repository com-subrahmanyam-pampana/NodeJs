// Requiring fs module and getting its reference.
const fs = require('fs');

console.log('I am about to read the file');

const start = Date.now()

// Reading the file synchronously.
const text = fs.readFileSync('README.txt', 'utf-8');

const end = Date.now()
console.log(`Reading the file blocked for ${end - start} milliseconds`)
console.log('All done!'); 