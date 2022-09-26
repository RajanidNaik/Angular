function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === "sum") return a+b;
            else if(operation === "mul") return a*b;
           else if(operation === "div") return a/b;
            else if(operation === "sub") return a-b;
            else return "Inavalid operation";

        };
    };
}
console.log(evaluate("sum"));
console.log(evaluate("sum")(1));
console.log(evaluate("sum")(1)(2));
console.log(evaluate("mul")(1)(2));