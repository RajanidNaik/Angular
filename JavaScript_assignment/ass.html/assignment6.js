//task6-create a method named includes which checks an element exists in an array
function include(arr){
    var value = prompt("enter a value");
    for(let val of arr ){
        
        if(value == val){
            return value; 
        } 
    }
    
        return "array does not have the value";
    
}
let array = ["mango","orange","apple"];
console.log(include(array));
