











    
//task-10
function shouldServeDrinks(age,session){
if(age >= 18 && session == false) return true;
else return false;
}
console.log(shouldServeDrinks(17,true));
console.log(shouldServeDrinks(19,false));
console.log(shouldServeDrinks(30,true));