let str="Animal";
let n=1.5643;
console.log(str.toUpperCase());
console.log(n.toFixed(n));
//can i add a string property
// let strs = "Hello";

// strs.test = 5;

// console.log(strs.test);
console.log(7.3e9);
console.log(1e-6);
console.log(0xFF);
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

console.log( a == b ); // true, the same number 255 at both sides

//toString(base)
let num = 255;

console.log( num.toString(16) );  // ff
console.log( num.toString(2) );   // 11111111
//round
let numb = 1.23456;

console.log( Math.round(numb * 100) / 100 );
console.log(Math.floor(numb));
console.log(Math.trunc(numb));

//imprecise calculations
console.log(1e500);
console.log(0.1 + 0.2 == 0.3);//false!!!
console.log(0.1 + 0.2);
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2));
console.log(+sum.toFixed(2));
console.log(9999999999999999);//shows 10000000000000000

//isFinite and isNaN
console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true
console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, because a special value: NaN

//parseInt parseFloat
console.log( +"100px" ); // NaN
console.log( parseFloat('12.5em') ); // 12.5
console.log( parseInt('100px') ); // 100
console.log( parseInt('a123') ); // NaN, the first symbol stops the process
console.log(Math.random());
console.log(Math.max(3,5,-1));
console.log(Math.min(1,2));
console.log(Math.pow(3,2));



//sum numbers from users
let number1 = prompt('enter the first number','');
let number2 = prompt('enter the second number','');
let total = number1 + number2;
console.log(total);