function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function asyncFunction() {
    console.log('Start');
    await delay(1000);
    console.log('After 1 second');
    await delay(1000);
    console.log('After another 1 second');
    return 'Done';
  }

  asyncFunction()
    .then(result => {
      console.log(result); 
    })
    .catch(error => {
      console.error('Error:', error);
    });
  