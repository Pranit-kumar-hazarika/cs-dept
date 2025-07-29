// Modal open/close logic
const joinBtn = document.getElementById("joinBtn");
const joinModal = document.getElementById("joinModal");
const closeModal = document.getElementById("closeModal");

joinBtn.addEventListener("click", () => {
  joinModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
  joinModal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === joinModal) {
    joinModal.style.display = "none";
  }
});


let slides = document.querySelectorAll('.slide');
let index = 0;

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}
  window.addEventListener('load', function () {
    const loader = document.getElementById('preloader');
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      fetch("https://formsubmit.co/pranitkumarhazarika@gmail.com", {
        method: "POST",
        body: new FormData(form),
      })
        .then(response => {
          if (response.ok) {
            formMessage.innerHTML = "<p style='color: green;'>Thanks! Your message was sent successfully.</p>";
            form.reset();
          } else {
            throw new Error("Form submission failed.");
          }
        })
        .catch(error => {
          formMessage.innerHTML = "<p style='color: red;'>Oops! Something went wrong. Please try again later.</p>";
        });
    });
  }); 
  