/* Final Project */
/* Imports my reset function from a module */
import reset from './moduleyu.js';

/* Initializing global variables */
const yugiCardTemplate = document.querySelector("[data-yugi-template]");
const yugiCardContainer = document.querySelector("[data-yugi-card-container]");
const searchInput = document.querySelector("[data-search]");

let yugis = [];
let cardTypes = ["https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes", "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Dark Magician",""];

/* sortBy function to choose between different data sets */
function sortBy(cardTypes, resetElement) {
    reset(resetElement)
    let filter = document.querySelector("#sortBy").value;
    switch(filter) {
        case "Dark Magician":
            displayCards(cardTypes[1])
            break;
        case "Blue-Eyes":
            displayCards(cardTypes[0]);
            break;
        case "None":
            displayCards(cardTypes[3]);
    
        };
};

/* eventListener to filter the data set using a search bar by hiding undesired options */
searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    yugis.forEach(yugi => {
        const isVisible = 
        yugi.name.toLowerCase().includes(value) || 
        yugi.desc.toLowerCase().includes(value)
    yugi.element.classList.toggle("hide", !isVisible)
    })
    
})

/* A display function to fetch the data chose in the sortBy function and display it on the page */
function displayCards(cards) {
    fetch(cards)
    .then(res => res.json())
    .then(info => {
        yugis = info.data.map(yugi => {
            const card = yugiCardTemplate.content.cloneNode(true).children[0]
            const header = card.querySelector("[data-header]")
            const body = card.querySelector("[data-body]")
            header.textContent = `Card Name: ${yugi.name}`;
            body.textContent = `Card Description: ${yugi.desc}`;
            yugiCardContainer.append(card)
            return { name: yugi.name, desc: yugi.desc, element: card}
        })
        
    })
}

/* An eventlistener to set everything into motion */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(cardTypes, yugiCardContainer)});