const main = document.querySelector("main");
const topHeader = document.querySelector(".top");
const btn = document.querySelector("#search");
const searchInput = document.querySelector("#search-name");

function toggleInterfaces(){
    main.classList.remove("hide")
    main.classList.add("show")
    topHeader.classList.remove("show")
    topHeader.classList.add("hide")
}

btn.addEventListener("click", ()=>{
    toggleInterfaces()
})