let arr = ["I", "go", "home"];
delete arr[1];
alert(arr);
alert(arr.length);

// using splice to remove element from array
 let arr1 = ["I", "study", "javascript","right","now"];
 //arr1.splice(1,1);
 //arr1.splice(0,3,"let's","dance");
 let removed = arr1.splice(3,2);//return the removed elements
 console.log(removed);
 arr1.splice(2,0,"complex","language");//add elements without removing elements by setting deleteCount to 0
 alert(arr1);
 console.log(arr1);

 //slice similar to splice
 console.log(arr1.slice(-2));

 //concat
 console.log(arr1.concat([1,2],3,4));
 console.log(arr1);

 //Iterate forEach
["mango", "Apple", "Guava"].forEach((item,index,array)=>{
alert(`${item} is at index ${index} in array ${array}`);
 });

 let num = [1,2,3,4,5];
 num.forEach((n,i,num) => {
    console.log(n,i,num);
 });
console.log(num.filter( n => n%2===0));//filter allow the elements only if it is true

 //searching in an array-indexOf() and includes()
 console.log(arr1.indexOf("complex"));
 console.log(arr1.includes("study"));
 console.log(arr1.lastIndexOf("complex"));//looks from right to left


 //find() findIndex() findLastIndex()
//  let users = [
//     {id:1, name:"tom"},
//     {id:2, name:"Jerry"},
//     {id:3, name:"Bob"}
//  ];
//  let user = users.find(item =>item.id==1);
//  console.log(user.name);
//  console.log(users.findIndex(user => user.name == "tom"));
//  //console.log(users.findLastIndex(user => user.name == "Bob"));
//  alert(users.findLastIndex(user => user.name == 'tom'));
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"},
    {id: 4, name: "John"}
  ];
  
  // Find the index of the first John
  alert(users.findIndex(user => user.name == 'John')); // 0
  
  // Find the index of the last John
  alert(users.findLastIndex(user => user.name == 'John')); // 3
  let someUsers = users.filter(item => item.id < 3);
  console.log(someUsers.length);



  // forEach,filter,map
  let nums = [24,46,51,83,56,33,93];
  nums.filter(n => n%2==0)
      .map(n => n*2)
      .forEach(n => {
        console.log(n);
      });


 console.log(arr1.join(';'));     


 //task1 
 function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}
console.log(camelize("background-color"));

//task2
let arr2 = [5,3,8,1];
function filterRange(arr, a, b){
  return arr.filter(item => (a >= item && b <= item));
}
let filtered = filterRange(arr2,4,1);
console.log(filtered);
console.log(arr2);

// //task3
// function filterRangeInPlace(arr, a, b){
//   return arr.filter(item => (a <= arr[i] <= b));
// }
// filterRangeInPlace(arr2, 1, 4);
// console.log(arr2)


//task
let arr3 =[5, 2, 1, -10, 8];
function compare(a,b){
  return b-a;
}
arr3.sort(compare);
console.log(arr3);

//task
function copySorted(arr) {
  return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr4);

alert( sorted );
alert( arr4 );


//task
let john = { name: "John", age: 25, surname: "Smith", id: 1 };
let pete = { name: "Pete", age: 30, surname: "Hunt", id: 2 };
let mary = { name: "Mary", age: 28, surname: "Key", id: 3 };

let users1 = [ john, pete, mary ];

let names = users1.map(item => item.name);/* ... your code */

alert( names ); // John, Pete, Mary


//task
let usersMapped = users1.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));/* ... your code ... */


console.log( usersMapped[0].id ) // 1
console.log( usersMapped[0].fullName ) // John Smith

//task
function sortByAge(users){
  return arr.sort((a,b) => a.age-b.age);
  /*return users.reduce((prev, user) => prev + user.age, 0) / users.length;*/
}
console.log(sortByAge(users1));
console.log(users1[0].name);//john
console.log(users1[1].name);//mary
console.log(users1[2].name);//pete

//task
function unique(arr) {
  /* your code */
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O


//task
function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
let usersById = groupById(users1);
console.log(usersById);

