// let str="hello";
// console.log(str.length);
// console.log( str[0] );
// console.log(str.charAt(2));
// console.log(str[str.length-1]);
// str[0]="H";
// console.log(str[0]);
// alert( "\u{1F60D}" );
// console.log( "\u{1F60D}" );
//changing the cases
// alert( 'Interface'.toUpperCase() ); // INTERFACE
// alert( 'Interface'.toLowerCase() ); // interface
//to acess a single character lowercased
//alert( 'Interface'[0].toLowerCase() ); // 'i'
//searching of substrings
//str.indexOf(substr,pos)
// let str1 = 'Widget with id';
// if(~str1.indexOf('Widget')){
//     alert('found it');
// }
// alert( str1.indexOf('id',2) );
// //
// let str2 = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str2.indexOf(target, pos + 1)) != -1) {
//   alert( pos );
//   console.log(pos);
// }
console.log(~2);//-(2+1)
// includes start with, end with
// let str3 = "Learning strings in javascript";
// console.log(str3.includes("javascript"));
// console.log(str3.startsWith("Lea"));
// console.log(str3.endsWith("ing"));
// console.log(str3.includes("bye"));
// alert(str3.includes("in",0));
//getting substring slice
// alert(str.slice(0,2));
// alert(str.slice(2));
// alert(str.slice(-3,-1));
//also through substr
//alert(str.substr(2,3));
//comparing strings
console.log('a'>'Z');
//str.codePointAt(pos)
console.log( "z".codePointAt(0) ); // 122
console.log( "Z".codePointAt(0) ); // 90
console.log("a".codePointAt(0));
//String.fromCodePoint
console.log( String.fromCodePoint(90) ); // Z
console.log('\u005a');
let str4 = '';
for(let i=65;i <= 220; i++){
    str4 += String.fromCodePoint(i);
}
console.log(str4);
//correct comparisions
console.log( 'Österreich'.localeCompare('Zealand') ); // -1
//internals, unicode
//surrogate pairs
console.log( '😂'.length ); // 2, FACE WITH TEARS OF JOY
alert( '𝒳'[0] );//symbol
alert( '𝒳'.charCodeAt(0).toString(16) ); // d835, between 0xd800 and 0xdbff
alert('S\u0307\u0323');//append a dot  above and bellow the letter code-\u0307 for upper and \u0323


let s1 = 'S\u0307\u0323';
let s2 = 'S\u0323\u0307';
console.log(s1,s2);
console.log(s1 == s2);//false
console.log("S\u0307\u0323".normalize() == "S\u0323\u0307".normalize());
console.log("S\u0307\u0323".normalize().length);

//trim() and repeat()
let s3 = "     Ram and shyam ";
console.log(s3.trim());
console.log(s3.repeat(3));


//task 1: Upper case the first character
let s5 = "string";
console.log(s5[0].toUpperCase() + s5.slice(1));

//task 2: check for spam
function checkSpam(str){
    let s6 = str.toLowerCase();
    console.log(s6);
    return s6.includes('viagra') || s6.includes('xxx');
    }
    console.log(checkSpam('buy ViAgRA now'));
    console.log(checkSpam('free xxxxx'));
    console.log(checkSpam('innocent rabbit'));

    // task 3: turncate the text
    function truncate(str, maxlength){
       return (str.length > maxlength) ? str.slice(0,maxlength-1) + "..." : str;
        
    }
    console.log(truncate("What I'd like to tell on this topic is:", 20) );

    console.log(truncate("Hi everyone!", 20) );

    //Extract the money
    function extractCurrencyValue(str){
        return +str.slice(1);// + unicode convert to number
    }
    console.log( extractCurrencyValue('$120') === 120 );



