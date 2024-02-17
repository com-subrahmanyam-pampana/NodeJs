//This process object is an instance of the EventEmitter class. 

process.on('beforeExit', (code) => {
	console.log('A beforeExit event ', code);
 });

process.on('exit', code => {
	setTimeout(() => {
		console.log('Never Executes....');
	}, 12);

	console.log('Exited with Code=', code);
});
console.log('THE END');


 
 