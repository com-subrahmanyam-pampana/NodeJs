
# Assert function:
The assert computer statement is analogous to the statement make sure in English.
An assertion is a boolean expression.
A test assertion is defined as an expression, which encapsulates some testable logic specified about a target under test.

Eg:
function myfunc(a, b)
{
     assert(a <= 5 && b >= 17.1, "Your comments")
     …
}

# Describe:
1.We use "Describe"  just  for the sake of understanding   the test purpose and
logically group the tests.
Eg:
describe('user',function(){
    
    describe('create',function(){});
    
    describe('update',function(){});


});

Types of testing: 
1.Unit 

2.Integration:
While unit tests always take results from a single unit, such as a function call, integration tests may aggregate results from various parts and sources. 

3.End-to-End

Assertion library:
1.Build in assert module
2.Chai

# Test Suites:

test spies:
stubs :
A small program routine that substitutes for a longer program which is possible to be loaded later or that is remotely located.
var fs = require('fs') 
var writeFileStub = sinon.stub(fs,  
    'writeFile', function (path, data, cb) {   
        return cb(null) 
}) 
  
expect(writeFileStub).to.be.called   
writeFileStub.restore()   

mocks: