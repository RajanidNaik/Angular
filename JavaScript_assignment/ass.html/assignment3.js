//task3-write function which checks given input parameter
function checkPara(speed){
    if(speed<70){
        return 'Good safe Driving';
    }else{
       let point = Math.round((speed-70)/5);
        return (speed >70 || speed < 120)?`Speed limit crossed by penalty Point + ${point}`:'Licence Suspended'
    }
    

    }
console.log(checkPara(90));
