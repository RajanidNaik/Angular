function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }let counter = makeCounter();

  //counter.count = 10;
  alert( counter() ); // 10


  //task2
  
