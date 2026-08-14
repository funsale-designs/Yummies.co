/* ==========================================
   YUMMIES CO.
   script.js
   Part 1
==========================================*/

document.addEventListener("DOMContentLoaded", function () {

const header = document.querySelector("header");

// Sticky Header
window.addEventListener("scroll", function () {

if (window.scrollY > 50) {
header.classList.add("sticky");
} else {
header.classList.remove("sticky");
}

});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function (e) {

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({
behavior: "smooth"
});

}

});

});

// Fade In Animation

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

section.classList.add("fade-in");

observer.observe(section);

});

// Current Year

document.querySelectorAll(".year").forEach(year=>{

year.textContent=new Date().getFullYear();

});

});/* ==========================================
   Part 2
   Hero Slider & Back To Top
==========================================*/

const heroImages=[

"hero.jpg",
"hero2.jpg",
"hero3.jpg",
"hero4.jpg"

];

let heroIndex=0;

setInterval(()=>{

const hero=document.querySelector(".hero");

if(hero){

heroIndex++;

if(heroIndex>=heroImages.length){

heroIndex=0;

}

hero.style.backgroundImage=

`linear-gradient(rgba(0,0,0,.55),
rgba(0,0,0,.55)),
url(${heroImages[heroIndex]})`;

}

},6000);

// Back To Top

const topButton=document.createElement("a");

topButton.href="#";

topButton.className="top-btn";

topButton.innerHTML="↑";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});/* ==========================================
   Part 3
   Gallery Lightbox
==========================================*/

const lightbox=document.createElement("div");

lightbox.className="lightbox";

document.body.appendChild(lightbox);

document.querySelectorAll(".gallery img").forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightbox.innerHTML="";

const img=document.createElement("img");

img.src=image.src;

lightbox.appendChild(img);

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});/* ==========================================
   Part 4
   Contact Forms
==========================================*/

document.querySelectorAll("form").forEach(form=>{

form.addEventListener("submit",function(e){

e.preventDefault();

let valid=true;

this.querySelectorAll("input,textarea").forEach(field=>{

if(field.value.trim()===""){

field.style.border="2px solid red";

valid=false;

}else{

field.style.border="none";

}

});

if(valid){

alert("Thank you for contacting YUMMIES CO. We will be in touch shortly.");

this.reset();

}

});

});/* ==========================================
   Part 5
   WhatsApp Button
==========================================*/

const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/27XXXXXXXXX";

whatsapp.target="_blank";

whatsapp.className="whatsapp";

whatsapp.innerHTML="💬";

document.body.appendChild(whatsapp);

console.log("YUMMIES CO. website loaded successfully.");
