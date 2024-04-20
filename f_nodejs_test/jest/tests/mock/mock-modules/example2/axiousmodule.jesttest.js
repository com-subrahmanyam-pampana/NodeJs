


const axios = require('axios');
const Users = require('./users');


/*in order to test axios method without actually hitting 
the API, we can use the jest.mock(...) function to
 automatically mock the axios module. */
jest.mock('axios');

/*Once we mock the module we can provide a mockResolvedValue 
for .get that returns the data we want our test to 
assert against. 
In effect, we are saying that we want 
axios.get('/users.json') to return a fake response. */
test('should fetch users', () => {
  const users = [{name: 'Bob'}];
  const resp = {data: users};
  axios.get.mockResolvedValue(resp);

  // or you could use the following depending on your use case:
  // axios.get.mockImplementation(() => Promise.resolve(resp))

  return Users.all().then(data => expect(data).toEqual(users));
});