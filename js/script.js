const main = document.querySelector("main");
const topHeader = document.querySelector(".top");
const mainHeader = document.querySelector(".main-header");
const repos  = document.querySelector(".cards");
const about = document.querySelector(".about");
const btn = document.querySelector("#search");
const searchInput = document.querySelector("#search-name");



function toggleInterfaces(){
    main.classList.remove("hide")
    main.classList.add("show")
    topHeader.classList.remove("show")
    topHeader.classList.add("hide")
}




async function getData(input){
    const profileResponse = await fetch(`https://api.github.com/users/${input}`);
    const profileData = await profileResponse.json();
    const repoResponse = await fetch(`https://api.github.com/users/${input}/repos?per_page=04&sort=created:asc`);
    const repoData = await repoResponse.json();

    return {
        profile:profileData,
        repo:repoData
    }
}

function showUser(about, rep, profile, repo){
    const img = document.querySelector(".user-img");
    const link = document.querySelector("a.profile");
    const follow = document.querySelector(".follow");
    const name = document.querySelector(".name");
    link.setAttribute("href", `${profile.html_url}`);
    let repo_output = "";
    img.innerHTML = `
        <img src="${profile.avatar_url}" alt="user-image" srcset="">
    `

    follow.innerHTML = `
        <div class="followers">
            <h3>${profile.followers}</h3>
            <p>followers</p>
        </div>
        <div class="following">
            <h3>${profile.following}</h3>
            <p>following</p>
        </div>
    </section>
    `

    name.innerHTML = `${profile.name} <span></span>`

    about.innerHTML = `
            <h2>About</h2>
            <p>${profile.bio}</p>

            <section class="sub-info">
                <p>
                    <img src="images/location.jpg" alt="" srcset="">
                    <span>${profile.location}</span>
                </p>

                <p>
                    <img src="images/repo.jpg" alt="" srcset="">
                    <span>${profile.public_repos} Public Repo</span>
                </p>
            </section>
    
    `
    repo.forEach((data) => {
        repo_output += `
        <div class="repo">
            <h3>${data.name}</h3>
            <p>Stars: ${data.stargazers_count}</p>
            <p>Created: 2021-12-14</p>
            <a href="${data.html_url}">View Repo</a>
        </div>
        ` 
    })

    rep.innerHTML = repo_output;

    
}

getData("osas2211").then(data => console.log(data.repo))


btn.addEventListener("click", ()=>{
    toggleInterfaces();
    getData(searchInput.value).then((data) => {
        showUser(about, repos ,data.profile, data.repo)
    })

})

const ham = document.querySelector(".ham");
const search2 = document.querySelector(".search-2");
const searchHide = document.querySelector(".search-2 a")


ham.addEventListener("click", ()=>{
    ham.classList.add("hide");
    search2.classList.remove("hide-2");
})

searchHide.addEventListener("click", ()=>{
    ham.classList.remove("hide");
    search2.classList.add("hide-2");
})
