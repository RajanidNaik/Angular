//task2-write a function which checks given width and height  return true if width is greater than height
function landscape(width,height){
    return (width>height)?true:false;
}
let w = prompt("enter the width",0);
let h = prompt("enter the height",0);
console.log(landscape(w,h));