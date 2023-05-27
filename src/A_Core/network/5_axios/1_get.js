
const axios = require("axios");

axios.get('https://api.publicapis.org/entries').then(resp => {
    console.log(resp.data);
});
