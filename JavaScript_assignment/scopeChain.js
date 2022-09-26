function a(){//3.search parent lexival enviornment(i,e global)
    //var b= 10;
    c();
    function c(){
        console.log(b);//2.search  parent lexival enviornment (i.e a()) 
    }
}
 var b= 10;//4.get the value
a();//1.function invoke