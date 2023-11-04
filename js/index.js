// Fix when scroll > 20
const headThree = document.querySelector(".headThree");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    headThree.classList.add("sticky");
  } else {
    headThree.classList.remove("sticky");
  }
});

// !header in Mob
const openHeader = document.querySelector(".fa-bars");
const closeHeader = document.querySelector(".fa-times");
const header = document.querySelector(".headThree ul");

openHeader.addEventListener("click", () => {
  header.style.cssText = "display:flex !important";
  header.classList.add("animate__animated", "animate__fadeInRight");
});

closeHeader.addEventListener("click", () => {
  header.style.cssText = "display:none !important";
});

// !Swipper
var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// !Function to update the counter
function updateCounter() {
  const currentTime = new Date().getTime();
  const targetTime = localStorage.getItem("targetTime");

  if (!targetTime || targetTime <= currentTime) {
    // Counter reached 00:00:00 or target time not set, handle it as needed.
    clearInterval(timer);
    return;
  }

  const timeDifference = targetTime - currentTime;

  // Calculate hours, minutes, and seconds
  const hours = String(
    Math.floor((timeDifference / 1000 / 3600) % 24)
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((timeDifference / 1000 / 60) % 60)
  ).padStart(2, "0");
  const seconds = String(Math.floor((timeDifference / 1000) % 60)).padStart(
    2,
    "0"
  );

  // Update the digit elements with the new values
  const digitElements = document.querySelectorAll(".digit");
  digitElements[0].innerText = hours[0];
  digitElements[1].innerText = hours[1];
  digitElements[2].innerText = minutes[0];
  digitElements[3].innerText = minutes[1];
  digitElements[4].innerText = seconds[0];
  digitElements[5].innerText = seconds[1];
}

// Initialize or retrieve the target time from local storage
let targetTime = localStorage.getItem("targetTime");
if (!targetTime) {
  // Set a default target time (e.g., 8 hours from the current time)
  targetTime = new Date().getTime() + 8 * 60 * 60 * 1000; // 8 hours in milliseconds
  localStorage.setItem("targetTime", targetTime);
}

// Update the counter immediately (initial setup)
updateCounter();

// Update the counter every second
const timer = setInterval(updateCounter, 1000);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);
