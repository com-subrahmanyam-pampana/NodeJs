var Emitter=require('events')
var emtr=new Emitter();

/*Subscribe to the events*/
emtr.on('wish',function(){
    console.log("Hello world")
})

/*Fire an event(Event publisher) */
emtr.emit("wish")