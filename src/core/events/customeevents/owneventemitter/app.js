var Emitter=require('./emmiter');
var emtr=new Emitter();
emtr.onEventFired('greet',function(){
    console.log("Hi")
})
emtr.onEventFired('greet',function(){
    console.log("Hi2")
})
emtr.onEventFired('eat',function(){
    console.log("I am eating")
})
emtr.emit("greet")
emtr.emit("eat")