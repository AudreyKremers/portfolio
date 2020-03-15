/* NAVBAR FULL SCREEN OVERLAY */
var trigger = document.getElementById("navbar-trigger-rotate");
function openNav() {
  trigger.style.transform = "rotate(90deg)";
  trigger.style.opacity= "0.3";
  document.getElementById("navbar-overlayFunctJS").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  trigger.style.transform = "rotate(180deg)";
  trigger.style.opacity = "1";
  document.getElementById("navbar-overlayFunctJS").style.width = "0%";
}
/* FIN NAVBAR FULL SCREEN OVERLAY */

/* SLIDESHOW */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
/* FIN SLIDESHOW */