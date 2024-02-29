/*This will execute the cd command */
let childProcess=require('child_process');

let exect=childProcess.exec;

const onCommandExecuation =function (err,stdout,error){
 if(error){
    console.log(error)
 }
 if(err){
    console.log(err)
 }
 if(stdout){
    console.log(stdout)
 }
}
exect('cd',onCommandExecuation);