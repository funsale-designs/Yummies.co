/* ======================================
   YUMMIES CO.
   Premium Website JavaScript
======================================*/

// Sticky Header
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(58,36,24,.98)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(58,36,24,.92)";
        header.style.boxShadow = "none";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior:"smooth"

        });

    });

});

// Fade In Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-in");

observer.observe(section);

});

// Back To Top Button

const topBtn = document.createElement("a");

topBtn.href="#";

topBtn.innerHTML="⬆";

topBtn.className="top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

// Current Year

document.querySelectorAll("footer").forEach(footer=>{

footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());

});
/* ===========================================
   YUMMIES CO.
   SCRIPT.JS - PART 2
   Mobile Menu, Gallery & WhatsApp
===========================================*/

// ==============================
// MOBILE MENU
// ==============================

const nav = document.querySelector("nav");

const menuButton = document.createElement("div");

menuButton.innerHTML = "☰";

menuButton.className = "menu-button";

header.appendChild(menuButton);

menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-nav");

});

// ==============================
// CLOSE MENU WHEN LINK CLICKED
// ==============================

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("mobile-nav");

});

});

// ==============================
// IMAGE LIGHTBOX
// ==============================

const lightbox=document.createElement("div");

lightbox.className="lightbox";

document.body.appendChild(lightbox);

document.querySelectorAll(".gallery img").forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

const img=document.createElement("img");

img.src=image.src;

while(lightbox.firstChild){

lightbox.removeChild(lightbox.firstChild);

}

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

// ==============================
// IMAGE HOVER
// ==============================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});

// ==============================
// FLOATING WHATSAPP BUTTON
// ==============================

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/27XXXXXXXXX";

whatsapp.className="whatsapp";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

document.body.appendChild(whatsapp);

// ==============================
// BUTTON RIPPLE EFFECT
// ==============================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

circle.style.width=circle.style.height=`${diameter}px`;

circle.style.left=`${e.offsetX-diameter/2}px`;

circle.style.top=`${e.offsetY-diameter/2}px`;

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

// ==============================
// LOADING SCREEN
// ==============================

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},700);

}

});
/* ==========================================
   YUMMIES CO.
   SCRIPT.JS - PART 3
   Premium Effects
==========================================*/

// =====================
// PARALLAX HERO
// =====================

window.addEventListener("scroll", () => {

const hero = document.querySelector(".hero");

if(hero){

hero.style.backgroundPositionY = window.pageYOffset * 0.5 + "px";

}

});

// =====================
// SCROLL PROGRESS BAR
// =====================

const progress = document.createElement("div");

progress.style.position = "fixed";
progress.style.top = "0";
progress.style.left = "0";
progress.style.height = "4px";
progress.style.width = "0%";
progress.style.background = "#c9a24c";
progress.style.zIndex = "9999";

document.body.appendChild(progress);

window.addEventListener("scroll", () => {

const winScroll =
document.documentElement.scrollTop;

const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

progress.style.width =
(winScroll / height) * 100 + "%";

});

// =====================
// FORM VALIDATION
// =====================

document.querySelectorAll("form").forEach(form => {

form.addEventListener("submit", function(e){

e.preventDefault();

const required =
this.querySelectorAll("input, textarea");

let valid = true;

required.forEach(field => {

if(field.value.trim() === ""){

field.style.border = "2px solid red";

valid = false;

}else{

field.style.border = "none";

}

});

if(valid){

alert("Thank you! Your enquiry has been sent.");

this.reset();

}

});

});

// =====================
// SIMPLE COUNTER
// =====================

document.querySelectorAll(".counter").forEach(counter=>{

const target = +counter.dataset.target;

let count = 0;

const speed = target / 100;

function update(){

count += speed;

if(count < target){

counter.innerText = Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText = target;

}

}

update();

});

// =====================
// TESTIMONIAL SLIDER
// =====================

const testimonials =
document.querySelectorAll(".testimonial");

let current = 0;

if(testimonials.length){

testimonials[current].classList.add("active");

setInterval(()=>{

testimonials[current].classList.remove("active");

current++;

if(current >= testimonials.length){

current = 0;

}

testimonials[current].classList.add("active");

},5000);

}

// =====================
// HERO IMAGE SLIDER
// =====================

const heroImages = [

"images/hero.jpg",
"images/hero2.jpg",
"images/hero3.jpg",
"images/hero4.jpg"

];

let heroIndex = 0;

setInterval(()=>{

const hero = document.querySelector(".hero");

if(hero){

heroIndex++;

if(heroIndex >= heroImages.length){

heroIndex = 0;

}

hero.style.backgroundImage =

`linear-gradient(rgba(0,0,0,.55),
rgba(0,0,0,.55)),
url(${heroImages[heroIndex]})`;

}

},7000);

// =====================
// COPYRIGHT YEAR
// =====================

document.querySelectorAll(".year").forEach(y=>{

y.textContent = new Date().getFullYear();

});

console.log("YUMMIES CO. Website Loaded Successfully");
