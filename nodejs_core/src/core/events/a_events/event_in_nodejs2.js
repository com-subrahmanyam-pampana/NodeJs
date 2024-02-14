var Emitter=require('events')
var emtr1=new Emitter();

/*Subscribe to the events*/
emtr1.on('wish',function(data1,data2){
    console.log(data1,data2)
})

/*Fire an event(Event publisher) */
emtr1.emit("wish","Trump","Musk")