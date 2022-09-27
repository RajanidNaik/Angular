document.querySelector("#category")
.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target.id);
    console.log("category parent clicked");
    if(e.target.tagName=='LI'){
        window.location.href="/"+ e.target.id;
    }
});