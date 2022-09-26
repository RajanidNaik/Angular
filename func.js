function showMessage() {
    let message = "Hello, I'm JavaScript!"; 
  
    console.log( message );
  }
  
  showMessage();
  console.log(message);//error

  //function min(a,b)

    function min(a,b){
        if(a<b){
            return a;
        }
        return b;
    }
min(5,3);

//function pow(x,n)
    function pow(x,n){
        let result=x;
        for(let i=1;i<n;i++){
            result*=x;
        }
      return result;
    }
pow(2,3);

let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}
showMessage();

alert( userName ); // John