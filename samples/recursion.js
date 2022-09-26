//function v/s recursion
function show(){
    console.log("hello");
}
show();//it only display the value after calling function

//recursion-function it self calling function
// function pow(x,n){
//     if(x==1) return 1;
//     else{
//         return x*pow(x,n-1);
//     }
// }
// console.log(pow(2,3));

//task-1 sum all numbers till the given one
function sumTo(n){
    //     let sum =0;
    //     for(let i=0;i<=n;i++){
    //        sum = sum+ i;
    //     }
    //    return sum; //using loop

    // using formula 
    //return n*(n-1)/2;
    if(n==1){
        return 1;
    }else{
        return n + sumTo(n-1);//using recursion
    }
    }

console.log(sumTo(100));//5050

//task-2 calculate factorial of number

function fact(num){
    if(num==1){
        return 1;
    }else{
        return num * fact(num-1);
    }
}
console.log(fact(5));
let number =prompt("enter a number",1);
console.log(fact(number));

//task-3 fibonacci numbers   
function fib(n){
   // return n<=1?n:fib(n-1)+fib(n-2);
    //alternative code
    let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
} 
console.log(fib(7));      

//task-4 output a single -linked list
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  function printList(list){
    //loop based solution
    // while(list){
    //     alert(list.value);
    //     list =list.next;
    // }
    //recursive solution
    alert(list.value);
    if(list.next){
        printList(list.next);
    }

  }
  printList(list);

  //task-5 output a single -linked list in the reverse order
  function printReverseList(list) {
    //loop based solution
    // let arr = [];
    
    // while (list) {
    //   arr.push(list.value);
    //   list = list.next;
    // }
  
    // for (let i = arr.length - 1; i >= 0; i--) {
    //   alert( arr[i] );
    // }
    //recursive solution
    
    if(list.next){
        printReverseList(list.next);
    }
    alert(list.value);
  }
  
  printReverseList(list);