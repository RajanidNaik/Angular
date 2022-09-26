//iterables-next() method to iterate
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }
  
  // Create Iterable
  const n = myNumbers();
  console.log(n.next()); // Returns 10
  console.log(n.next());// Returns 20
  console.log(n.next()); // Returns 30


  myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
for (const num of myNumbers) {
    console.log(num);

  }

  //Array.from-takes iterable or array-like value and makes a real array
  let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
  };
  
  let arr = Array.from(arrayLike); // (*)
  alert(arr.pop()); // World (method works)

  //for iterable
  let range = {
    from: 1,
    to: 5
  };
  
  let arr1 =Array.from(range);
  console.log(arr1);
