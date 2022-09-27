let user ={
    name:"Rajani",
    address:{
        personal:{
            city:"mandarthi",
            area:"billadi"
        },
        office:{
            city:"Udupi",
            area:{
                landmark:"Santekatte"
            }
        }
    }
}
let final_obj={};
let magic = function(obj,parent){
for(let key in obj){
    if(typeof obj[key]=== 'object'){
        final_obj= Object.assign(final_obj, magic(obj[key],parent + '_'+key));//Syntax: Object.assign(target, ...sources)
    }else{
       final_obj[parent + '_'+key]=obj[key];
    }
}
return final_obj;
}
console.log(magic(user,"user"));
