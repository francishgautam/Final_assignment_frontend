const body = document.querySelector("body");
const icon  = document.querySelector("#navbar__toggle-theme");

console.log(icon);

icon.addEventListener("click", () => {
    if(body.classList.length){
        body.classList.toggle("dark-theme");
        icon.innerHTML = "🌚";
    }
    else{
        body.classList.toggle("dark-theme");
        icon.innerHTML = "🌝";
    }

})