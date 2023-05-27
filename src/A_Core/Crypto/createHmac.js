const crypto = require('crypto');  
const secret = 'subbu';  
const hash_key = crypto.createHmac('sha256', secret)  
                   .update('Hello')  
                   .digest('hex');  
console.log(hash_key);  