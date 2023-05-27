process.stdout.write('Enter any number:');

process.stdin.on('readable', function () {
  var key = String(process.stdin.read());
  process.stdout.write(`You entered ${key}`);
});
