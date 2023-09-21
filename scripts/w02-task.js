/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Stuart Cannon Olmstead";
let currentYear = "2023";
let profilePicture = "images/profilepic.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML =`<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src' , profilePicture);
imageElement.setAttribute('alt' , `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ["chicken", "rice", "broccoli"]
foodElement.textContent = favFoods
let favFood = "cheese"
favFoods.push(favFood)
foodElement.innerHTML += `<br>${favFoods}</br>`;
favFoods.shift()
foodElement.innerHTML += `<br>${favFoods}</br>`;
favFoods.pop()
foodElement.innerHTML += `<br>${favFoods}</br>`;





