async function getInfo(){
console.log("inside getinfo function");
const response = await fetch('https://api.github.com/users');
console.log("before response");
const user = await response.json();
console.log("user resolved");
return user;
}
console.log("Before calling function");
let users = getInfo();
console.log("after calling function");
console.log(users);



//task- rewrite using async/await
// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404


   async function loadJson(url) {
        let response = fetch(url);
            if (response.status == 200) {
              return response.json();
            } else {
              throw new Error(response.status);
            }
          }
      
      
      loadJson('https://javascript.info/no-such-user.json')
        .catch(alert); // Error: 404