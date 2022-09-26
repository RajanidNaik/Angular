//task9
function strLength(str){
    if (str == "") return 0;
    else{
        return  strLength(str.substring(1)) + 1;
    }
}
console.log(strLength("hi"));