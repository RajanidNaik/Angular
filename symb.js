console.log("this is symbol")
const sym=Symbol('id');
console.log('type of symbol',typeof sym);
const sym1=Symbol('my id');
const sym2=Symbol('my id');
console.log(sym1===sym2);

const k1=Symbol();
const k2=Symbol();
myobj={};
myobj[k1]="Rajani";
myobj[k2]="naik";
console.log(myobj);
for(key in myobj){
    console.log(key,myobj[key]);
}// symbols are ignored in for loop
let ids = Symbol("id");
let users = {
  name: "John",
  age: 30,
  [ids]: 123
};

for (let key in users){ // name, age (no symbols)
console.log(key,users[key])};

//global symbols
let id = Symbol.for("id");
let idAgain = Symbol.for("id");
console.log( id === idAgain );

//Symbol.keyFor
let symb= Symbol.for("name");
console.log( Symbol.keyFor(symb) );

//global symbols and local symbols
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log( Symbol.keyFor(globalSymbol) ); // name, global symbol
console.log( Symbol.keyFor(localSymbol) ); // undefined, not global

console.log( localSymbol.description ); // name

//Symbol.toPrimitive
let user = {
    name: "John",
    money: 1000,
  
    [Symbol.toPrimitive](hint) {
      console.log(`hint: ${hint}`);
      return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
  };
  
  // conversions demo:
  console.log(user); // hint: string -> {name: "John"}
  console.log(+user); // hint: number -> 1000
  console.log(user + 500); // hint: default -> 1500


  //toString/valueof
  let userj= {
    name: "John",
    money: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() {
      return this.money;
    }
  
  };
  
  console.log(userj); // toString -> {name: "John"}
  console.log(+userj); // valueOf -> 1000
  console.log(userj + 500); // valueOf -> 1500