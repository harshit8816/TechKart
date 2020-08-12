let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let doctorimg = document.getElementById("doctor");
let kidimg = document.getElementById("kid");


var imgArr=["img/doctor1.png","img/kid1.png","img/kid2.png","img/doctor2.png","img/eyesexpanded.png"];
var doctor = ["Hey bud,sup ?", "What's the matter?", "Oh ! But there is no need to worry...", "Don't you know about TECHKART...", "TECHKART is an online website to buy top quality phones and laptops at reasonable prices...", "Simply head to <i class='fa fa-hand-o-right'></i><a style='color:white;' href='https://techkart.netlify.app/index.html'style='text-decoration:underline;'>TECHKART</a> and you will reach there..."];
var kid = ["Nothing pal, just a lil confused...", "I want to buy a new phone , But I don't know where to get best deals from?", "What's that?", "Okay , You made things easier for me", "And How can I access TECHKART?"];


setTimeout(() => {
    doctorimg.src= imgArr[0];
    p1.innerHTML = doctor[0];
    p2.innerHTML = "...";
}, 4000);

setTimeout(() => {
    kidimg.src= imgArr[1];
    p2.innerHTML = kid[0];
    p1.innerHTML = "...";
}, 6500);

setTimeout(() => {
    doctorimg.src= imgArr[0];
    p1.innerHTML = doctor[1];
    p2.innerHTML = "...";
}, 8500);

setTimeout(() => {
    kidimg.src= imgArr[1];
    p2.innerHTML = kid[1];
    p1.innerHTML = "..."; 
}, 10500);

setTimeout(() => {
    doctorimg.src= imgArr[0];
    p1.innerHTML = doctor[2];
    p2.innerHTML = "...";
}, 12500);

setTimeout(() => {
    doctorimg.src= imgArr[0];
    p1.innerHTML = doctor[3];
    p2.innerHTML = "...";
}, 14500);

setTimeout(() => {
    kidimg.src= imgArr[1];
    p2.innerHTML = kid[2];
    kidimg.style.transform="rotateY(180deg)";
    p1.innerHTML = "...";
}, 16500);

setTimeout(() => {
    doctorimg.src= imgArr[0];
    p1.innerHTML = doctor[4];
    p2.innerHTML = "...";
    kidimg.style.transform="";
}, 18500);

setTimeout(() => {
    kidimg.src= imgArr[1];
    p2.innerHTML = kid[3];
    p1.innerHTML = "...";
}, 20500);

setTimeout(() => {
    kidimg.src= imgArr[1];
    p2.innerHTML = kid[4];
    p1.innerHTML = "...";
}, 22500);

setTimeout(() => {
    doctorimg.src= imgArr[0];
    p1.innerHTML = doctor[5];
    p2.innerHTML = "...";
}, 24500);

