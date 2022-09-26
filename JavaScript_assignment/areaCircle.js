// const radius = [3,5,9,6];
// const calculateArea = function(arr){
//     const output = [];
//     for(let i =0; i< arr.length;i++){
//         output.push(Math.PI*arr[i]*arr[i]);
//     }

//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function(arr){
//     const output = [];
//     for(let i =0; i< arr.length;i++){
//         output.push(2*Math.PI*arr[i]);
//     }
//     return output;
// }
// console.log(calculateCircumference(radius));

// const calculateDiameter = function(arr){
//     const output = [];
//     for(let i =0; i< arr.length;i++){
//         output.push(2*arr[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));
//code is correct but it had repeated lines.


//to remove repeated line we can use higher order function
const radius = [3,5,9,6];
const calculate = function(arr,logic){
         const output = [];
        for(let i =0; i< arr.length;i++){
            output.push(logic(arr[i]));
        }
    
        return output;
    }
// to make calculate work as map by using Array.prototype 
Array.prototype.calculate = function(logic){
    const output = [];
   for(let i =0; i< this.length;i++){
       output.push(logic(this[i]));
   }

   return output;
}

const area = function (radius){
    return Math.PI*radius*radius
} 
const circumference = function (radius){
    return 2*Math.PI*radius;
} 
const diameter = function (radius){
    return 2*radius;
}
console.log(calculate(radius,area)) ;//give the same output 
// using map
console.log(radius.map(area));//give same output
console.log(radius.calculate(area));//similar to map
console.log(calculate(radius,circumference)) ; 
console.log(calculate(radius,diameter)) ; 





