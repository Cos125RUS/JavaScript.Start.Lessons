const heading = document.querySelector(".title");
// console.log(heading);
const heading2 = document.getElementById("heading");
// console.log(heading2);
const heading3 = document.querySelector("#heading");
// console.log(heading3);
const listElements = document.getElementsByClassName("list"); 
// console.log(listElements);
const listElementsQS = document.querySelectorAll(".list");
// console.log(listElementsQS);
const text = document.querySelectorAll(".text");
// console.log(text);
// text.forEach(e => console.log(e));


const heading4 = document.createElement("h4");
heading4.textContent = "My first title from JS";
// console.log(heading4);

heading.textContent = "My title from JS";

heading2.remove();

const cloneHeading = heading.cloneNode(true);
// console.log(cloneHeading);
// document.body.appendChild(cloneHeading);

// document.body.replaceWith(heading, heading2, heading4);

const contentEl = document.querySelector(".content");
const buttonEl = document.querySelector(".btn");
const pEl = document.createElement("p");
pEl.textContent = "lorem100";
const imgEl = document.querySelector(".img");

buttonEl.onclick = function() {
    buttonEl.textContent = "Product in cart";
    contentEl.appendChild(pEl);
    imgEl.src = "newPhoto.jpg";
}

