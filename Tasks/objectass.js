
let object = {
    name:"Jhon",
    age:20,
    department:"IT",
    subs : [ {label:"one"}]
};

function checkString(obj){
    for (let value of Object.values(obj)) {
        let str="";
       if(typeof(value) === "string"){
        str += value +" ";
        console.log(str);
}    else if(typeof value === "object"){
                return checkString(obj);
}else return str;
    

}
}

console.log(checkString(object));
