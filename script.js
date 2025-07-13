// Background slider for Home section
let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(() => {
  slides.forEach((slide) => slide.classList.remove("active"));
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);

// Carousel for media section
const track = document.querySelector(".carousel-track");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let scrollAmount = 0;
const scrollStep = 320;

next.addEventListener("click", () => {
  scrollAmount += scrollStep;
  track.scrollTo({ left: scrollAmount, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  scrollAmount -= scrollStep;
  track.scrollTo({ left: scrollAmount, behavior: "smooth" });
});
