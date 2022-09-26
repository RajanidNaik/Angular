//json convert object to string
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
  };
  console.log(student);
  let json = JSON.stringify(student);
  
  console.log(typeof json); // we've got a string!
  
  console.log(json);
  console.log(json.replace('Jhon','rohan'));
  let newjson = JSON.parse(json);
  console.log(newjson);

  //task- turn the object into json and back
  let user = {
    name: "John Smith",
    age: 35
  };
  let jsonStr = JSON.stringify(user);
  console.log(jsonStr);
  let newjsonStr = JSON.parse(jsonStr);
  console.log(newjsonStr);


  //task2
  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  // circular references
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    /* your code */alert(`${key}: ${value}`);
  return (key != "" && value == meetup) ? undefined : value;
  }));