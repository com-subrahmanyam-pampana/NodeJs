
/*Emitteer function constracture */
function Emitter(){
    this.events={};
}

/*We are adding a new function onEventFired*/
Emitter.prototype.onEventFired=function(type,litener){
    this.events[type]=this.events[type]||[];
    this.events[type].push(litener);
}

Emitter.prototype.emit=function(type){
    console.log("Emitting the events.....")
    console.log(this.events)
    if(this.events[type]){
        this.events[type].forEach(function(listner){
            listner();
        });
    }
}
module.exports=Emitter