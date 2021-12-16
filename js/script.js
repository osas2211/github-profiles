const main = document.querySelector("main");
const topHeader = document.querySelector(".top");
const btn = document.querySelector("#search");
const searchInput = document.querySelector("#search-name");
const ham = document.querySelector(".ham");
const search2 = document.querySelector(".search-2");
const searchHide = document.querySelector(".search-2 a")

function toggleInterfaces(){
    main.classList.remove("hide")
    main.classList.add("show")
    topHeader.classList.remove("show")
    topHeader.classList.add("hide")
}

btn.addEventListener("click", ()=>{
    toggleInterfaces()
})

ham.addEventListener("click", ()=>{
    ham.classList.add("hide");
    search2.classList.remove("hide-2");
})

searchHide.addEventListener("click", ()=>{
    ham.classList.remove("hide");
    search2.classList.add("hide-2");
})