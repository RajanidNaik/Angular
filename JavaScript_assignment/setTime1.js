console.log("start");
setTimeout(function cb(){
    console.log("callback");
},5000);
console.log("end");
//million lines of code take time to execute approximate 10 sec
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate + 10000){
    endDate = new Date().getTime();
}
console.log("while expires");