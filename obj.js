let user = null;

console.log( user?.address ); // undefined
console.log( user?.address.street ); // undefined

//let users = {}; // a user without "address" property

//console.log(user.address.street); // Error!

//short-circuiting
let userss = null;
let x = 0;

userss?.sayHi(x++); // no "user", so the execution doesn't reach sayHi call and x++

console.log(x); // 0, value not incremented

//?.() variants
let userAdmin = {
    admin() {
      console.log("I am admin");
    }
  };
  
  let userGuest = {};
  
  userAdmin.admin?.(); // I am admin
  
  userGuest.admin?.(); // nothing happens (no such method)

  //?.[] variants
  let key = "name";

let user1 = {
  name: "John"
};

let user2 = null;

console.log( user1?.[key] ); // John
console.log( user2?.[key] ); // undefined
delete user1?.name;