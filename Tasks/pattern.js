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
//reverse of pattern

function patternRev(rows){
    let string = "";
        for(let i=0;i<rows;i++){
            for(let j=0;j<rows-i;j++){
            string += "*";
        }
        string +="\n";
    }
    return string;
    
}
let rows = prompt("enter the number of rows",1);
console.log(patternRev(rows));

