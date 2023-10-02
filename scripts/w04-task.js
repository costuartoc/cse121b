/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Stuart Olmstead",
    photo: "images/profilepic.jpg",
    favoriteFoods: [
        "Chicken Divan", 
        "Enchiladas",
        "French Dip"
    ],
    hobbies: [
        "Reading",
        "Rock Climbing",
        "Swimming",
        "Collecting Cards"
    ],
    placesLived: [

    ]
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: "Chandler, AZ",
        length: "23 years"
    }
);
myProfile.placesLived.push(
    {
        place: "Bucharest, RO",
        length: "2 years"
    }
);

/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').setAttribute("src", myProfile.photo);
document.querySelector('#photo').setAttribute("alt", myProfile.name);

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

let dt1 = document.createElement('dt');
dt1.textContent = myProfile["placesLived"][0]["place"];

let dt2 = document.createElement('dt');
dt2.textContent = myProfile["placesLived"][1]["place"];

let dd1 = document.createElement('dd');
dd1.textContent = myProfile["placesLived"][0]["length"];

let dd2 = document.createElement('dd');
dd2.textContent = myProfile["placesLived"][1]["length"];

document.querySelector('#places-lived').appendChild(dt1);
document.querySelector("#places-lived").appendChild(dd1);
document.querySelector('#places-lived').appendChild(dt2);
document.querySelector("#places-lived").appendChild(dd2);

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


