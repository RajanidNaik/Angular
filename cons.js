// function User(name) {
//     this.name = name;
//     this.isAdmin = false;
//   }
  
//   let user = new User("Jack");
  
//   console.log(user.name); 
//   console.log(user.isAdmin);

// let user = {
//     name: "Jack",
//     isAdmin: false
//   };
//   let User = new function() {
//     this.name = "John";
//     this.isAdmin = false;
//   };

// function User() {
//     console.log(new.target);
//   }
  
//   // without "new":
//   User(); // undefined
  
//   // with "new":
//   new User(); // function User { ... }

function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  console.log( new BigUser().name );
  function SmallUser() {

    this.name = "John";
  
    return; // <-- returns this
  }
  
  console.log( new SmallUser().name ); 

  function User(name) {
    this.name = name;
  
    this.sayHi = function() {
      console.log( "My name is: " + this.name );
    };
  }
  
  let john = new User("John");
  
  john.sayHi();

  //Two functions -one object
  let obj={};
  function A(){
    return obj;
  }
  function B(){
    return obj;
  }
  console.log( new A()==new B() );

  //Create new calculator
  function Calculator(){
    this.read = function() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
      };
    
      this.sum = function() {
        return this.a + this.b;
      };
    
      this.mul = function() {
        return this.a * this.b;
      };
  }
  let calculator = new Calculator();
  calculator.read();
  
  console.log( "Sum=" + calculator.sum() );
  console.log( "Mul=" + calculator.mul() );

  //create new accumulator
  function Accumulator(startingValue){
    this.value=startingValue;
    this.read=function(){
        this.value += +prompt("value?",'0');
    };
  }
  let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values