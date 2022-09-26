// const students =[
//     {name:"Rajani",subject:"electronics"},
//     {name:"savithri",subject:"medical"}
// ];
// function studentEnroll(student){
//     setTimeout(() => {
//         students.push(student);
//     },3000);
// }
// function getStudent(){
//     setTimeout(() => {
//         let str = " ";
//         students.forEach((student)=>{
//             str +=`<li>${student.name}</li>`
//         });
//         document.getElementById("students").innerHTML = str;
//     },1000);
// }
// let newStudent = {name:"Swathi",subject:"bsc"}
// studentEnroll(newStudent);
// getStudent();//getStudent execute first because of delay time..to over come this we use callback

// using callback
const students =[
    {name:"Rajani",subject:"electronics"},
    {name:"savithri",subject:"medical"}
];
function studentEnroll(student,callback){
    setTimeout(() => {
        students.push(student);
        callback();
    },3000);
}
function getStudent(){
    setTimeout(() => {
        let str = " ";
        students.forEach((student)=>{
            str +=`<li>${student.name}</li>`
        });
        document.getElementById("students").innerHTML = str;
    },1000);
}
let newStudent = {name:"Swathi",subject:"bsc"}
studentEnroll(newStudent,getStudent);
