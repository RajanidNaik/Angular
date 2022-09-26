let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'
alert(map.get(true));//'bool1'
alert( map.size ); // 3
console.log(map.has(true));



//map can also use object as keys
//Iteration over map

for(let [k,v] of map){
    console.log(k, ":",v);
}


let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  
  // iterate over keys (vegetables)
  for (let vegetable of recipeMap.keys()) {
    alert(vegetable); // cucumber, tomatoes, onion
  }
  
  // iterate over values (amounts)
  for (let amount of recipeMap.values()) {
    alert(amount); // 500, 350, 50
  }
  
  // iterate over [key, value] entries
  for (let entry of recipeMap) { // the same as of recipeMap.entries()
    alert(entry); // cucumber,500 (and so on)
  }
  //map has inbuilt forEach method
  recipeMap.forEach( (value, key, map) => {
    console.log(`${key}: ${value}`); // cucumber: 500 etc
  });

  //object.entries:Map from function
  let obj = {
    name: "John",
    age: 30
  };
  
  let maps = new Map(Object.entries(obj));
  console.log(Object.entries(obj));
  console.log( maps.get('name') ); // John


  //Object.fromEntries:Object from map
  let map1 = new Map();
map1.set('banana', 1)
    .set('orange', 2)
    .set('meat', 4);

let obj1 = Object.fromEntries(map1.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }
console.log(Object.fromEntries(map1.entries(map1)));
console.log(obj1.orange); // 2


//set
let nums = new Set();
nums.add(3);
nums.add(4);
nums.add("apple");
console.log(nums);


let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}


//task-1
function unique(arr){
return Array.from(new Set(arr));

}
let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O


//task
function aclean(arr){
    let map = new Map();

    for (let word of arr) {
      // split the word by letters, sort them and join back
      let sorted = word.toLowerCase().split('').sort().join(''); // (*)
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"


//task
let map2 = new Map();

map2.set("name", "John");

let keys = Array.from(map2.keys());

// Error: keys.push is not a function
keys.push("more");


//waekMap and WeakSet
//task1
let messages = [
  {text: "Hello", from: "John"},
  {text: "How goes?", from: "John"},
  {text: "See you soon", from: "Alice"}
];
let weakset = new WeakSet();
weakset.add(messages[0]);
weakset.add(messages[1]);
console.log(weakset.has(messages[0]));
console.log(messages.shift());
console.log(weakset.has(messages[0]));

//task2
let readMap = new WeakMap();

readMap.set(messages[0], new Date(2017, 1, 1));