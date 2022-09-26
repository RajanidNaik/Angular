let result= 0;
        const operator='/';//prompt("enter the operator",'+');
        const num1= 9;//prompt("enter the first number:",'0');
        const num2=3;//prompt("enter the first number:",'0');
        switch(operator){
            case '+':
                result:num1+num2;
                console.log(`${num1}+${num2}=${result}`);
                break;
                
            case '-':
                result:num1-num2;
                console.log(`${num1}-${num2}=${result}`);
                break;   
            case '*':
                result:num1*num2;
                console.log(`${num1}*${num2}=${result}`);
                break;
            case '/':
                result:num1/num2;
                console.log(`${num1}/${num2}=${result}`);
                break;
            default:
                console.log("invalid operator");
        }