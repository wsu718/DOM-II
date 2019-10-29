// Your code goes here
// one
const primaryImg = document.querySelector(".intro img");
primaryImg.addEventListener("mouseover", () => {
    primaryImg.src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
})

// two
const body = document.querySelector("body");
body.addEventListener("keydown", () => {
    body.style.backgroundColor = 'blue';
})

// three
body.addEventListener("select", () => {
    body.style.color = 'blue';
})

// four
document.querySelectorAll("img").forEach(el => { 
    el.addEventListener("dblclick", () => {
        el.style.transform = "scale(3)";
        el.style.border = "10px black solid"
        event.stopPropagation();
})});

// five
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.borderBottom="1px black dotted";
    })});

// six
const allPs = document.querySelectorAll("div p");
allPs.forEach(el => {
    el.addEventListener("mouseenter", () => {
        el.style.backgroundColor="purple";
    })});

// seven
window.addEventListener('keydown', (event) => {
    audio.play();
})

var audio = new Audio('http://bensound.com/bensound-music/bensound-summer.mp3');

//eight

body.addEventListener("dblclick", () => {
    body.style.backgroundColor = "beige";
})

//nine 

window.addEventListener('load', (event) => {
    console.log(`%c ________________________________________
< Lambda Schoooooooooooool >
 ----------------------------------------
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||`, "font-family:monospace")
})

//ten
const header = document.querySelector("header");
const newContent = document.createElement("div");
newContent.textContent = "What the heck man, you broke my site!";
newContent.style.height = "100%";
newContent.style.backgroundColor = "black";
newContent.style.zIndex = "100000";
newContent.style.height = "1000px";
newContent.style.color = "white";
newContent.style.fontSize = "100px";

body.addEventListener("keydown", () => {
    header.append(newContent);
})


const noLink = document.querySelector(".nav-link");

noLink.addEventListener("click", (event) => {
  console.log("stopped the link");
  event.preventDefault();
})


// //* [ ] Using your [index.js file](js/index.js), create 10 [unique event listeners](https://developer.mozilla.org/en-US/docs/Web/Events). using your creativity to make the Fun Bus site more interactive.  Here are some unique events you could try to use: 
// 	* [x] `mouseover`
// 	* [x] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [x] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [x] `dblclick`

// Using the 10 unique events, find ways to update the DOM in creative ways. For example you could change colors, animate objects, remove objects, etc.

// * [x] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [X] Stop the navigation from items from refreshing the page by using `preventDefault()`

//green sock

let photo = document.getElementById("adv");
TweenLite.to(photo, 2.5, {width: '-=400px'})