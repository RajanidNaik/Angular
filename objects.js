let user = {
    name: "John",
    age: 30
  };
  console.log(Object.keys(user));
  console.log(Object.values(user));
  console.log(Object.entries(user));

  //tansforming object
  let prices = {
    banana: 1,
    orange: 2,
    meat: 4
  };
  
  let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  );
  
  console.log(doublePrices.orange); // 8
  console.log(doublePrices);


  //task1-sum thr properties
  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
  alert( sumSalaries(salaries) ); // 650
  function sumSalaries(salaries){
    let sum = 0;
    for(let salary of Object.values(salaries)){
        sum +=salary;
    }
    return sum;
  }


  //task2-countproperties
  let users = {
    name: 'John',
    age: 30
  };
  
  alert( count(users) );
  function count(obj){
    return Object.entries(obj).length;//return Obeject.keys(obj).length,return Object.values(obj).length
  }