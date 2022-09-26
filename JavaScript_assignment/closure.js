//closure example
// function x(){
//     var a=12;
//     function y(){
//         console.log(a);
//     }
//     y();
// }
// x();


// function x(){
//     var a=12;
//     return function y(){
//         console.log(a);
//     }
//     //return y;//return function outside
// }
// var z = x();
// console.log(z);
// //.....in some where in the code call returned function
// z();


//example-3

function z(){
    var b = 900;
    function x(){
            var a=12;
            function y(){
                console.log(a,b);
            }
            var a = 100;
            y();

}
x();
}
z();