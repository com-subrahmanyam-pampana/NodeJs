
npm install -g loadtest

loadtest http://localhost:3000/sumofn/500000000 -n 1000 -c 100

//n is total number of request and c is the total number of concurrent requests