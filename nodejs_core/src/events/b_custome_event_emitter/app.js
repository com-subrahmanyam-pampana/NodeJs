var Emitter=require('./emmiter');
var emtr=new Emitter();
emtr.on('greet',function(){
    console.log("Hi")
})
emtr.on('greet',function(){
    console.log("Hi2")
})
emtr.on('eat',function(){
    console.log("I am eating")
})
emtr.emit("greet")
emtr.emit("eat")