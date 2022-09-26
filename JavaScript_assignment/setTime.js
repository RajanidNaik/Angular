// function x(){
//     for(var i =1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000);
//     }
// }
// x();// 6 6  6 6 6 ,not expected out put


//using closure 
function x(){
    for(var i =1; i<=5; i++){
        function close(a){
        setTimeout(function(){
            console.log(a)
        },i*1000);
    }
    close(i);//create new copy of i
}
}
x();// 1 2 3 4 5,expected output