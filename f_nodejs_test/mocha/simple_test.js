const assert=require("assert");

function additionTest(){
      describe("Addition",function(){
            it('Result should be 3',function(){
              let result=1+1+1;
              assert.equal(result,3)
             });
      });
}
function multiplicationTest(){
      describe("Multiplication",function(){
            it('Result should be 6',function(){
              let result=2*3;
              assert.equal(result,6)
             });
      });
}
describe('Basic Test',function(){
      additionTest();
      multiplicationTest();
});

/*
To run from command line:
 mocha simple_test.js
*/