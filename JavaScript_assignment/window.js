//shortest js is empty script
//window and this are global spaces



var x = 10;//global
function a(){
    var y= 20;//local
}
console.log(window.x);//10
console.log(this.x);//10
console.log(x);//10, automatically asumes that we reffering to global space
//console.log(y);//error :not defined