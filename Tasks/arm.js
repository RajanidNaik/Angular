const number=153;//prompt("enter the number",'153');
//const noOfDigits=number.length;
let sum=0;
let temp=number;
while(temp>0){
    let rem = temp % 10;
    sum += rem * rem * rem;//rem**noOfDigits;
    temp = parseInt(temp / 10);
}
if(sum == number){
    console.log(`${number} is an armstrong number`);
}else{
    console.log(`${number} is not a armstrong number`);
}