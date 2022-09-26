function attachEventListner(){
    const button = document.getElementById("clickMe");
    let count =0;
    button
    .addEventListener("click",function a(){
        console.log("Button clicked" + ++count);
    }
    
    );
}
attachEventListner();
