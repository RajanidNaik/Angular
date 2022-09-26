const users = [
    {firstName:"Jhon", lastName:"Bing", age:26},
    {firstName:"Akshay", lastName:"Saini", age:23},
    {firstName:"donald", lastName:"trump", age:75},
    {firstName:"elon", lastName:"musk", age:26},
];
const output = users.map((x)=> x.firstName+" "+x.lastName);
console.log(output);
//to get age count
const output1 = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output1);
//to get name who has age <30
const output2 = users.filter((x)=>x.age<30).map((x)=>x.firstName);
console.log(output2);
const output3 = users.reduce((acc,curr)=>{
    if(curr.age<30){
        //acc[curr.firstName] = curr.firstName;
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(output3);