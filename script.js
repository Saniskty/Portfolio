"use strict";

/* =========================
   MOBILE NAVBAR TOGGLE
========================= */
const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");

menu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


/* =========================
   SMOOTH SCROLL NAV LINKS
========================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }

    // close mobile menu after click
    navLinks.classList.remove("active");
  });
});


/* =========================
   UPLOAD WORK FUNCTION
========================= */
function uploadWork() {
  const fileInput = document.getElementById("fileUpload");
  const workList = document.getElementById("work-list");

  if (!fileInput.files.length) {
    alert("Please select a file first!");
    return;
  }

  const file = fileInput.files[0];

  const card = document.createElement("div");
  card.classList.add("card");

  // Show file info
  card.innerHTML = `
    📁 <strong>${file.name}</strong>
    <br>
    <small>${(file.size / 1024).toFixed(2)} KB</small>
  `;

  workList.appendChild(card);

  // reset input
  fileInput.value = "";
}


/* =========================
   CONTACT FORM VALIDATION
========================= */
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[type="text"]').value.trim();
  const email = form.querySelector('input[type="email"]').value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return;
  }

  alert("Message sent successfully!");

  form.reset();
});


/* =========================
   SIMPLE SCROLL ANIMATION
========================= */
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "0.6s ease";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(30px)";
    }
  });
});


/* =========================
   INITIAL SECTION STYLE
========================= */
sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
});

