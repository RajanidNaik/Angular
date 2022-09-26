//closure- data hiding
// var count =0;
//     function innerCounter(){
//         count++;
//         console.log(count);
//     }
//     var count =1;//where value of counter can change anybody,so we can use closure
//     innerCounter();


function counter(){
    var count =0;
    function innerCounter(){
        count++;
        console.log(count);
    }
    //return innerCounter;
    return innerCounter;
}
//console.log(count);//Reference Error:count is not defined(we cant access out side )
var count = 1;//cant change the value
var counter1 =counter();
counter1();
counter1();
console.log(counter1);
// we can create other new counter
var count2 = counter();
count2();//start new counter