let tap=require('tap');
let EventEmitter=require('events').EventEmitter;
let test=tap.test;

let a=2;
let b='Subbu';
let c={"1":"one"};
let e=[];
let f=new EventEmitter();
test("Data types checking",function(test_var){
    test_var.type(a,'number')
    test_var.type(b,'string')
    test_var.type(c,Object)
    test_var.type(f,EventEmitter)
    test_var.end()
})