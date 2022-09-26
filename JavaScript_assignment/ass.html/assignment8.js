//task8
function convertSec(hours,minutes){
    let seconds2 = hours*3600;
    let seconds1 = minutes * 60;
    return seconds1 + seconds2;
}
console.log(convertSec(1,3));
