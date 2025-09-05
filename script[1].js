// Smooth auto-sliding carousel
let index = 0;
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");

function moveCarousel() {
  index = (index + 1) % slides.length;
  track.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 3000);