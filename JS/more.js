const container = document.querySelector(".row");
const back = document.querySelector(".back")

window.addEventListener("load", () => {
    const ninjas = JSON.parse(localStorage.getItem("moreAboutNinja"));

    cardTemplate(ninjas)
})

function cardTemplate(base) {
    const template = `
    <div class="card">
        <div class="card_img"><img src="${base.image}"></div>
        <div class="card_more">
            <div>
                <p>Name</p>
                <h2>${base.name}</h2>
            </div>
            <div>
                <p>Power</p>
                <p>${base.power}</p>
            </div>
            <div>
                <p>Village</p>
                <p>${base.village}</p>
            </div>
            <div>
                <p>Level</p>
                <p>${base.level}</p>
            </div>
            <div>
                <p>Clan</p>
                <p>${base.clan}</p>
            </div>
        </div>
    </div>
    `

    container.innerHTML = template;
}


back.addEventListener("click", () => {
    window.open("../index.html", "_self");
})
