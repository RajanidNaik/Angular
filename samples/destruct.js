// we have an array with the name and surname
let arr = ["John", "Smith"]

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

alert(firstName); // John
alert(surname);  // Smith

//object destructuring
// let options = {
//     title: "Menu",
//     width: 100,
//     height: 200
//   };
  
//   let {title, width, height} = options;
  
//   alert(title);  // Menu
//   alert(width);  // 100
//   alert(height); // 200

  //nested destructuring
  let options = {
    size: {
      width: 100,
      height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
  };
  
  // destructuring assignment split in multiple lines for clarity
  let {
    size: { // put size here
      width,
      height
    },
    items: [item1, item2], // assign items here
    title = "Menu", // not present in the object (default value is used)
  extra     
} = options;
  
  alert(title);  // Menu
  alert(width);  // 100
  alert(height); // 200
  alert(item1);  // Cake
  alert(item2);  // Donut
  alert(extra);//true

  //smart function parameters


  //task1:destruturing assignment
  let user = {
    name: "John",
    years: 30
  };
let { name:name,years:age,isAdmin:isAdmin=false} = user;  
alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false


//task2-maximal salary
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  function topSalary(salaries){
    let maxSalary = 0;
    let maxName = null;
  
    for(const [name, salary] of Object.entries(salaries)) {
      if (maxSalary < salary) {
        maxSalary = salary;
        maxName = name;
      }
    }
  
    return maxName;
  }
  console.log(topSalary(salaries));