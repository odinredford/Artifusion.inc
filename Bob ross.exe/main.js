 
"use strict";
 
console.log("Hello and welcome to the studio, i'm the dev here to say thank you for taking the time to paint with 'us' today. This website is an interactive painting program that lets you paint along with the popular television show 'the joy of painting'. I made this because I am a fan of the show and wanted to create an easy, streamline way to create beautiful pieces of art, also because I needed to make something for my final project in my cs class. If you have any confusion about what you are doing, click the question mark button at the bottom of the canvas. have fun!");
 
 
 
 
//PRIMARY CANVAS SPECIFICATIONS
let cnv = document.getElementById("mycanvas");
let ctx = cnv.getContext("2d");
cnv.height = 400;
cnv.width = 600;
 
//SECONDARY CANVAS SPECIFICATIONS
let cnv2 = document.getElementById("dem");
let ctx2 = cnv2.getContext("2d");
cnv2.height = 100;
cnv2.width = 100;
 
//GLOBAL VARIABLES
let x = 100;
let mouseIsPressed = false;
let mouseX, mouseY;
let curseSize = 5;
let penColor = "000000";
let spGrn = "#0A3410";
let alCrim = "#4E1500";
let vDB = "#221B15";
let drkSina = "#5F2E1F";
let mdntBlk = "#000000";
let prsBlu = "#021E44";
let pthloBlu = "#0C0040";
let pthloGrn = "#102E3C";
let cadmYel = "#FFEC00";
let YelOch = "#C79B00";
let indYel = "#FFB800";
let brtRed = "#DB0000";
let titWit = "#FFFFFF";
 
//EVENT LISTENERS
 
//PEN LISTENERS
document.addEventListener("mousedown", hamdown);
document.addEventListener("mouseup", hamup);
document.addEventListener("mousemove", hamove);
document.addEventListener("keydown", keyStroke);
 
//COLOUR LISTENERS
document.getElementById("colorPicker").addEventListener("change", colorPalette);
document.getElementById("alCrim").addEventListener("click", Butt1);
document.getElementById("spGrn").addEventListener("click", Butt2);
document.getElementById("vDB").addEventListener("click", Butt3);
document.getElementById("drkSina").addEventListener("click", Butt4);
document.getElementById("mdntBlk").addEventListener("click", Butt5);
document.getElementById("prsBlu").addEventListener("click", Butt6);
document.getElementById("pthloBlu").addEventListener("click", Butt7);
document.getElementById("pthloGrn").addEventListener("click", Butt8);
document.getElementById("cadmYel").addEventListener("click", Butt9);
document.getElementById("yelOch").addEventListener("click", Butt10);
document.getElementById("indYel").addEventListener("click", Butt11);
document.getElementById("brtRed").addEventListener("click", Butt12);
document.getElementById("titWit").addEventListener("click", Butt13);
 
//OTHER
document.getElementById("helpp").addEventListener("click", helpDisplay);
document.getElementById("erase").addEventListener("click", erase);
document.getElementById("save").addEventListener("click", save);
 
//PEN ANIMATION CONTROL
requestAnimationFrame(draw);
function draw() {
  if (mouseIsPressed) {
    ctx.fillStyle = penColor;
    ctx.beginPath();
    ctx.arc(mouseX, mouseY, curseSize, 0, 2 * Math.PI);
    ctx.fill();
  }
 
  requestAnimationFrame(draw);
}
 
//GENERAL PEN FUNCTIONS
function hamdown() {
  mouseIsPressed = true;
}
 
function hamup() {
  mouseIsPressed = false;
}
 
function hamove(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
}
 
//KEY CONTROLS
function keyStroke(event) {
  console.log(event.code);
 
  if (event.code == "Delete") {
    ctx.fillStyle = "rgb(249, 241, 223)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx2.fillStyle = "rgb(249, 241, 223)";
    ctx2.fillRect(0, 0, cnv2.width, cnv2.height);
  } else if (event.code == "ArrowDown" || event.code == "ArrowLeft") {
    curseSize--;
 
    if (curseSize < 1) {
      curseSize++;
    }
  } else if (event.code == "ArrowUp" || event.code == "ArrowRight") {
    curseSize++;
 
    if (curseSize > 50) {
      curseSize--;
    }
  }
}
 
//KEY SCROLL CONTROLS
document.addEventListener(
  "keydown",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);
 
//PEN PREVIEW
requestAnimationFrame(draw2);
function draw2() {
  var img = document.getElementById("bkgrnd");
  var pat = ctx2.createPattern(img, "repeat");
  ctx2.rect(0, 0, 150, 100);
  ctx2.fillStyle = pat;
  ctx2.fill();
 
  ctx2.fillStyle = penColor;
  ctx2.beginPath();
  ctx2.arc(50, 50, curseSize, 0, 2 * Math.PI);
  ctx2.fill();
 
  requestAnimationFrame(draw2);
}
 
//COLOUR CONTROLS
function colorPalette() {
  penColor = document.getElementById("colorPicker").value;
  console.log(penColor);
}
 
function Butt1() {
  penColor = "#4E1500";
}
 
function Butt2() {
  penColor = "#0A3410";
}
 
function Butt3() {
  penColor = "#221B15";
}
 
function Butt4() {
  penColor = "#5f2E1f";
}
 
function Butt5() {
  penColor = "#000000";
}
 
function Butt6() {
  penColor = "#021E44";
}
 
function Butt7() {
  penColor = "#0C0040";
}
 
function Butt8() {
  penColor = "#102E3C";
}
 
function Butt9() {
  penColor = "#FFEC00";
}
 
function Butt10() {
  penColor = "#C79B00";
}
 
function Butt11() {
  penColor = "#FFB800";
}
 
function Butt12() {
  penColor = "#DB0000";
}
 
function Butt13() {
  penColor = "#FFFFFF";
}
 
//HELP HIDER, SAVER, DELETE
function helpDisplay() {
  document.getElementById("mars").classList.toggle("hide");
}
 
function erase() {
  ctx.fillStyle = "rgb(249, 241, 223)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx2.fillStyle = "rgb(249, 241, 223)";
  ctx2.fillRect(0, 0, cnv2.width, cnv2.height);
}
 
function download() {
  var download = document.getElementById("download");
  var image = document
    .getElementById("mycanvas")
    .toDataURL("image/png")
    .replace("image/png", "image/octet-stream");
  download.setAttribute("href", image);
}
 
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
function showSlides(n) {
var i;
 var slides = document.getElementsByClassName("galleryPainting");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = 'block';  
}
 
