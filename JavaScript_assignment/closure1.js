function outest(){
    var c= 20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        //let a = 10; //10 hello 20
        return inner;
    }
    return outer;
}
let a =100;
var close = outest()("hello");// where ()() for calling inner function
close();//100 hello 20