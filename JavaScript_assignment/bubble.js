//bubbling up
// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("Grandparent clicked");
// },false);
// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log("parent clicked");
// },false);
// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("child clicked");
// },false);


//trickling down or capturring
document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent clicked");
},true);
document.querySelector("#parent")
.addEventListener('click',()=>{
    console.log("parent clicked");
},true);
document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("child clicked");
},true);

//capturing take place first, then bubbling take place
// document.querySelector("#grandparent")
// .addEventListener('click',()=>{
//     console.log("Grandparent clicked");
// },true);
// document.querySelector("#parent")
// .addEventListener('click',()=>{
//     console.log("parent clicked");
// },false);
// document.querySelector("#child")
// .addEventListener('click',()=>{
//     console.log("child clicked");
// },true);//output-grandparent,child,parent



//to stop propogation
document.querySelector("#grandparent")
.addEventListener('click',()=>{
    console.log("Grandparent clicked");
},false);
document.querySelector("#parent")
.addEventListener('click',(e)=>{
    console.log("parent clicked");
    e.stopPropagation();
},false);
document.querySelector("#child")
.addEventListener('click',()=>{
    console.log("child clicked");
},false);




