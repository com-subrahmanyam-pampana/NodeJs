const axios = require('axios');
const fs = require('fs');
let config = {
    responseType: 'stream'
};
let url = 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png';
axios.get(url, config).then(response=>{
    if(response!=null){
        response.data.pipe(fs.createWriteStream('image.png'));
    }
});
