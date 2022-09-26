//task5-write a function which checks and prints stars  for the number of times and rows provided
function pattern(rows){
    let string = "";
    for(let i=1;i<=rows;i++){
        for(let j=1;j<=i;j++){
            string += "*";
        }
        string +="\n";
    }
    return string;
}
let row = prompt("enter the number of rows",1);
console.log(pattern(row));