/*Test stubs are functions (spies) with pre-programmed behavior. */
/*In match ,we assume few things prove our therom.

Let say x=prime number then we prove rest of the therom.

Similally we will assume that the method return some particular value for 
given inputs
*/

const assert = require('assert')
const sinon = require('sinon')



const addNumbers = (x, y)=> x + y

describe('Stub', function () {
    // eslint-disable-next-line no-undef
    it('Add method returns 10', function () {
      const stub = sinon.stub(addNumbers)
     stub.withArgs(4, 6).returns(10)
  
    })
  })
