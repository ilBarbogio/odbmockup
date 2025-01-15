let banner, content
let searchToggle,searchPanel
let authBtn,actionDropdown

function setup(){
    banner=document.querySelector("#header .panel")
    content=document.querySelector("#main")
    content.addEventListener("scroll",ev=>{
        let ratio=ev.target.scrollTop/ev.target.scrollHeight
        banner.style.backgroundPosition=`0 ${Math.floor(ratio*100)}%`
    })

    searchPanel=document.getElementById("search")
    searchToggle=document.getElementById("search-toggle-btn")

    searchToggle.addEventListener("click",()=>{
        searchPanel.classList.toggle("open")
    })


    actionDropdown=document.getElementById("action-dropdown")
    authBtn=document.getElementById("auth-btn")

    authBtn.addEventListener("click",()=>{
        actionDropdown.classList.toggle("open")
    })

    let modelCards=document.querySelector(".card-deck.models")
    for(let i=0;i<Math.floor(Math.random()*6)+6;i++){
        modelCards.innerHTML+=`<div class="card">
            <img src="./odbbanner.jpg" onclick="alert('Go to this model page')">
            <span class="model" onclick="alert('Search model with this name')">model</span>
            <span class="author" onclick="alert('Search this author name')">author</span>
        </div>`
    }
    let bookCards=document.querySelector(".card-deck.books")
    for(let i=0;i<Math.floor(Math.random()*6)+6;i++){
        bookCards.innerHTML+=`<div class="card">
            <img src="./odbbanner.jpg" onclick="alert('Go to this model page')">
            <span class="model" onclick="alert('Search model with this name')">model</span>
            <span class="author" onclick="alert('Search this author name')">author</span>
        </div>`
    }
}

setup()