

const axios = require('axios');
const assert = require('assert')
const nock = require('nock')

const getData = async () => {
  const res = await axios.get('https://api.example.com')
  const data = res.data
  return data
}

describe('expectedData', () => {
  it('checks if API returns expected data', async () => {
    nock('https://api.example.com')
      .get('/')
      .reply(200, {
        data: {
          id: 1,
          title: 'The weather is nice',
          completed: true
        }
      })
    const results = await getData()
    assert.equal(results.data.title , 'The weather is nice')
  })
})
