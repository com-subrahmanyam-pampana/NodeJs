/* Test stubs are functions (spies) with pre-programmed behavior. */
/* In match ,we assume few things prove our therom.

Let say x=prime number then we prove rest of the therom.

Similally we will assume that the method return some particular value for
given inputs
*/

const assert = require('assert')
const sinon = require('sinon')

const obj = {}
obj.GetUser = function MyConstructor () {
  this.user = {
    name: 'subbu'
  }
}
describe('Stub', function () {
  // eslint-disable-next-line no-undef
  it('Check Login status:Success', async function () {
    sinon.stub(obj, 'GetUser').callThroughWithNew().withArgs().returns({ user: { name: 'Trump' } })
    const userX = new obj.GetUser().user
    console.log(userX)
    assert.deepEqual(userX, { name: 'Trump' })
  })
})


