let tap=require('tap');
let test=tap.test;

let c=2+2;
test("Addition of two numbers test",function(test_var){
    test_var.equal(c,4,"Result must be 4");
    test_var.end()
})