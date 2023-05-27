const sumOfNNaturalNumbers = () => {
    let number = 5000000000;
    let sum = 0;
    for(let i=0;i<=number;i++){
        sum=sum+i;
    }  
    return sum;
  }
  
  process.on('message', (message) => {
    if (message == 'SUM') {
      console.log('We are inside the Child process');
      let sum = sumOfNNaturalNumbers();
      process.send(sum);
    }
  });