let fruits = ["Apple","Orange", "Mango"];
console.log (fruits[0]);//access the element
fruits[1] = "plum";
console.log(fruits[1]);//replace an element
console.log(fruits.length);
console.log(fruits);
let arr = ["Mango",{name:'Ram'}, true, function() {alert("hello");}];//array can store elements of ant type
console.log(arr[1].name);
console.log(arr[3]());
// to get last element
console.log(fruits[fruits.length-1]);
console.log(fruits.at(-1));//using at()

//Methods : pop/push, shift/unshift
console.log(fruits.pop());//pop
console.log(fruits);
fruits.push("Pear"); //push
console.log(fruits);
console.log(fruits.shift());//shift,extract the element and return it
fruits.unshift("Apple");
console.log(fruits);
fruits.push("Peach","Guava");
fruits.unshift("Pineapple","Lemon");
console.log(fruits);
alert(fruits);

//internals
//loops
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

//for..of loop
for(let fruit of fruits){
    console.log(fruit);
}
//for..in loop
for(let key in fruits){
    console.log(fruits[key]);//for..in is meant for objects so we generally not use for..in arrays

}
//About length
fruits[123] = "Banana";
console.log(fruits.length);//124, automatically updates


let arr1 = [1,2,3,4,5,6];
arr1.length = 2;//turncate to 2 element
console.log(arr1);
arr1.length = 5;//return length back
console.log(arr1[4]);//the values do not return

//new Array()
let arr2 = new Array(2);//create array with empty items
console.log(arr2[0]);//undefined,empty array
console.log(arr2.length);

//multidimensional array
let matrix = [ [1,2,3], [4,5,6],[7,8,9]];
console.log(matrix[1][0]);

//toString
let arr3 = [1,2,3,4,5];
console.log(arr3);
console.log(String(arr3));
console.log(String(arr3) === '1,2,3,4,5');//true

//dont compare with ==
console.log([]==[]);//false
console.log(0==[]);//true
console.log('0'==[]);//false
//after [ converted to '']
console.log(0=='');//true
console.log('0'=='');//false


//task-1 : Is array copied
let fruits1 = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits1;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits1.length ); // ? //4 copied two variables reference the same array


//task 2: Array operations
let styles = ["Jazz","Blues"];
console.log(styles);
styles.push("Rock-n-Roll");
console.log(styles);
styles[Math.floor((styles.length-1)/2)] = "Classic";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap","Reggae");
console.log(styles);


//task 3: Calling in array context
let arr5 = ["a", "b"];

arr5.push(function() {
  alert( this );
});

arr5[2](); // ?, a,b,function(){.....}


//task 4:sum input numbers
function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("A number please?", 0);
  
      // should we cancel?
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );
