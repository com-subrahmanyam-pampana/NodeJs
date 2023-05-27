var Emitter=require('events')
var emtr=new Emitter();

emtr.on('wish',function(){
    console.log("Hiu")
})

emtr.emit("wish")