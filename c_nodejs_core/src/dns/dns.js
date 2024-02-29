const dns = require('dns');  
dns.lookup('www.google.com', (err, addresses, family) => {  
  console.log('Addresses:', addresses);  
  console.log('Family:',family);  
});  