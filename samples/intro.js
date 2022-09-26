//variables in js
// var, let, const
var name="rajani";// var -global level
console.log(name);
var str=`Fl''ow"er`;
var channel;
var marks=0;
marks=25;
var city="manglore";
//channel="code";           //undefined
console.log(str,channel,marks);
const Ownername="ram";
console.log(Ownername);
//Ownername="raj";//error cannot change this. cannot re-declare
const arr1=[1,2,3,4,5];
//arr1.push(6); we can change the elements
console.log(arr1);
{
let city= "santekatte";//let: block -level
city="Udupi";
console.log(city);
}
console.log(city);
/* programming case
CamelCase
Kebab-case
snake_case
Pascalcase
*/
//Premitive datatypes
//string
var Name="data types";
console.log("my string is:" + Name);
console.log("data type:" + (typeof(Name)));
//number
let Marks = 34;
console.log("data type:" + (typeof(Marks)));
//boolean
let isDriver=false;
console.log("data type:" + (typeof(isDriver)));
//null
let nullVar=null;
console.log("data type:" + (typeof(nullVar)));
//undefined
let undef=undefined;
console.log("data type:" + (typeof(undef)));
//array
myarr=[1,2,3,3];
console.log("data type:" + (typeof(myarr)));
//object
let user={
    names:"ram",
    age:30,
    car:"maruthi"
};
console.log(user);
//function
function names(){

}
console.log(typeof names);
//date
let date= new Date();
console.log(date, (typeof date));
//typeconversion
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));
let booleanVar=String(true);
console.log(booleanVar, (typeof booleanVar));
// by using toString()
let i= false;
console.log(i.toString());
let stri=Number("3434");
console.log(stri,(typeof stri));
let n= Number(true);
console.log(n,(typeof n));
let str1=Number("34d34");
console.log(str1,(typeof str1));
//parseInt and parse float
let number3=parseInt('34.2098');
console.log(number3,(typeof number3));




