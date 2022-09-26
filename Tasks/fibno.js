const number = prompt("enter the number of terms",'');
let n1 = 0, n2 = 1, nextTerm;
alert("fibonacci series");
for(let i=1;i<=number;i++){
    alert(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2 =nextTerm;
    
}
