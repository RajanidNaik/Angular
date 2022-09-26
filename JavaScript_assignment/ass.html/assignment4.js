//task4- write a function which checks and prints only the string type properties of an object
let users = {
    name:"Jhon",
    age:20,
    department:"IT"
};
function checkString(obj){
    for (let value of Object.values(obj)) {
       if(typeof(value) === "string"){
        console.log(value);
}
}
}
console.log(checkString(users));


