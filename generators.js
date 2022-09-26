function* generateSequence() {
    yield 1;
    yield 2;
    //yield 3;
    return 3;
  }
  
  let generator = generateSequence();
  let one = generator.next();
  let two = generator.next();
  let three = generator.next();
  console.log(one,two,three);
  
  alert(JSON.stringify(one)); // {value: 1, done: false}
 

   //generators are iterable
   for(let value of generator) {
    console.log(value); // 1, then 2
  }
//generator composition
  
  function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i;
  }
  function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);
  
    // A..Z
    yield* generateSequence(65, 90);
  
    // a..z
    yield* generateSequence(97, 122);
  
  }
  
  let str = '';
  
  for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
  }
  
  alert(str); // 0..9A..Za..z


  //Pseudo random generator
  function* pseudoRandom(seed) {
    let value = seed;
  
    while(true) {
      value = value * 16807 % 2147483647
      yield value;
    }
  
  };
  let generators= pseudoRandom(1);

alert(generators.next().value); // 16807
alert(generators.next().value); // 282475249
alert(generators.next().value); // 1622650073
  