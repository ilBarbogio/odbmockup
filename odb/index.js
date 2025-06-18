let banner, content
let searchToggle,searchPanel
let authBtn,actionDropdown
let contentSideSwitch

function setup(){
    banner=document.querySelector("#header .panel")
    content=document.querySelector("#content")
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


    contentSideSwitch=document.getElementById("content-side-switch")
    contentSideSwitch.addEventListener("click",()=>{
        let side=document.getElementById("side-content")
        side.classList.toggle("visible")
    })

    generateLetterLinks()

    window.addEventListener("resize",generateCards)
    generateCards()
}

function generateLetterLinks(){
    let letters=document.querySelector(".row.letters")
    letters.innerHTML=`<span onclick="alert('Show result by number')">#</span>`
    for(let i=0;i<26;i++){
        letters.innerHTML+=`<span onclick="alert('Show result starting with ${String.fromCharCode(65+i)}')">${String.fromCharCode(65+i)}</span>`
    }
}

function generateCards(){
    //cards
    let content=document.getElementById("content")
    let homeWidth=content.getBoundingClientRect().width
    let probe=document.createElement("div")
    probe.style=`
    position:absolute;
    width:1rem;
    visibility:hidden;
    `
    content.append(probe)
    let width=probe.getBoundingClientRect().width
    let n=Math.floor((homeWidth-(window.innerWidth<=400?2:3)*width)/(width*6))
    probe.remove()

    let lastCards=document.querySelector(".card-deck.last")
    lastCards.innerHTML=""
    for(let i=0;i<2*n;i++){
        let model=Math.random()>.5
        let click=model?"changeToDetail('model')":"changeToDetail('book')"
        lastCards.innerHTML+=`<div class="card">
            <img src="https://picsum.photos/${200 +i*10+Math.floor(Math.random()*50)}/${200+i*10}" onclick="${click}">
            <span class="model" onclick="alert('Search model with this name')">${model?"model":"book"}</span>
            <span class="author" onclick="alert('Search this author name')">author</span>
            <span class="ear ${model?"model":"book"}"></span>
        </div>`
    }

    let modelCards=document.querySelector(".card-deck.models")
    modelCards.innerHTML=""
    for(let i=0;i<n;i++){
        modelCards.innerHTML+=`<div class="card">
            <img src="https://picsum.photos/${200 +i*10 +Math.floor(Math.random()*50)}/${200+i*10+Math.floor(Math.random()*50)}" onclick="changeToDetail('model')">
            <span class="model" onclick="alert('Search model with this name')">model</span>
            <span class="author" onclick="alert('Search this author name')">author</span>
            <span class="ear model"></span>
        </div>`
    }
    let bookCards=document.querySelector(".card-deck.books")
    bookCards.innerHTML=""
    for(let i=0;i<n;i++){
        bookCards.innerHTML+=`<div class="card">
            <img src="https://picsum.photos/${200 +i*10}/${200+i*10+Math.floor(Math.random()*50)}" onclick="changeToDetail('book')">
            <span class="model" onclick="alert('Go to this book page')">book</span>
            <span class="author" onclick="alert('Search this author name')">author</span>
            <span class="ear book"></span>
        </div>`
    }
}

function generateDetail(kind){
    let detailTitle=document.querySelector(".detail-content .title")
    detailTitle.innerHTML=`
        <span>
            ${kind=="model"?
                "<span class='pre'>Name: </span> <span class='ttl'><a>A nice model</a></span>"
                :
                "<span class='pre'>Title: </span><span class='ttl'><a>A foldy foldable book</a></span>"}
        </span>
        <span>
            <span class='pre'>Author: </span> <a><b>Fred Folder</b></a>
        </span>
        <span>
            <span class='pre'>${kind=="model"?"Created":"Pub date"}: </span> <span>time</span>
        </span>
    `


    let detailImages=document.querySelector(".detail-content .images")
    detailImages.innerHTML=""
    for(let i=0;i<Math.floor(Math.random()*3+1);i++){
        detailImages.innerHTML+=`
        <img src="https://picsum.photos/${200 +i*10}/${200+i*10}"/>`
    }

    let detailPubs=document.querySelector(".detail-content .pubs")
    if(kind=="model"){
        detailPubs.innerHTML="<h3>Published in</h3>"
        let n=Math.floor(Math.random()*2+1)
        for(let i=0;i<n;i++){
            detailPubs.innerHTML+=`
            <div class="row ${i==n-1?"last":""}">
                <span>
                    <span>Title: <a><b>witty foldy title</b></a></span>
                    <span>Type: <b>book/magazine/website</b></span>
                    <span>Date: <b>dd/mm/yyyy</b></span>
                </span>
                <img src="./odbbanner.jpg"/>
            </div>
            `
        }
    }else{
        detailPubs.innerHTML=`
        <h3>Publication info</h3>
        <p>
            Optional publication description or review, as a text,
            then rows for info like pages, type of content (figurative, geometric...),
            other data
        </p>
        `
    }
}

function changeToDetail(kind){
    document.startViewTransition(()=>{
        let home=document.querySelector("#content .home-content")
        let detail=document.querySelector("#content .detail-content")
        home.style.display="none"
        detail.style.display="block"
    })
    generateDetail(kind)
}
function changeToHome(){
    document.startViewTransition(()=>{
        let home=document.querySelector("#content .home-content")
        let detail=document.querySelector("#content .detail-content")
        home.style.display="block"
        detail.style.display="none"
    })
    generateCards()
}

setup()
