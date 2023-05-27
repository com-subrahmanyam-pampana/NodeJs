

const axios = require('axios');

let urls_list = [
    'https://api.publicapis.org/entries',
    'https://reqres.in/api/users?page=2',
    ];

getData(urls_list);

async function getData(urls_list) {
    //This will fetch data for the passed url 
    const apiData = (url) => axios.get(url);
    let promises=[]
    promises= urls_list.map(apiData);
    console.log(promises)
    let responses = await Promise.all(promises);
    responses.forEach(resp => {
        let data = `${resp.config.url} => ${resp.status}`;
        console.log(data);
    });
}

