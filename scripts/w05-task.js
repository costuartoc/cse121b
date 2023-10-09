/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */

const displayTemples = (temples) => {
    temples.forEach(temple => {
        let article = document.createElement('article');
        let h3 = document.createElement('h3');
        h3.textContent =temple.templeName;
        let img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        templeList = await response.json();
    }
    
    displayTemples(templeList);
};

/* reset Function */
const reset = (parent) => {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

/* sortBy Function */
const sortBy = (temples) => {
    reset(templesElement);
    let filter = document.querySelector("#sortBy").value;
    switch(filter) {
        case "utah":
            let filterUtah = temples.filter(temple => {
                return temple.location.includes('Utah');
            });
            displayTemples(filterUtah);
            break;
        case "notutah":
            let filterNonUtah = temples.filter(temple => {
                return !temple.location.includes('Utah');
            });
            displayTemples(filterNonUtah);
            break;
        case "older":
            let filterOld = temples.filter(temple => {
                let matches = temple.dedicated.match(/\d+/g)
                return matches[0] < 1950
            });
            displayTemples(filterOld);
            break;
        case "all":
            displayTemples(temples);
    
        };
};

getTemples();


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)});

