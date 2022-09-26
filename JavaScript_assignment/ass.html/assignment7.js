//task7
const studentArray = [
    {name:'Suraj',year:2019,ranking:4},
    {name:'Amit',year:2019,ranking:9},
    {name:'Akash',year:2018,ranking:4},
    {name:'Sagar',year:2017,ranking:3},
    {name:'Dinanath',year:2019,ranking:7}

];
let student = studentArray.filter((obj) =>obj.year===2019 && obj.ranking > 4)
                          .sort((a,b) => a.name > b.name ? 1: -1)
                          .map((x)=>x.name);
console.log(student);
// for(let names of student){
//     console.log(names[0]);
// }
  