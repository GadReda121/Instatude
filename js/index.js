// Fix when scroll > 20
const headThree = document.querySelector(".headThree");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    headThree.classList.add("sticky");
    btnTop.style.cssText = "display:block";
  } else {
    headThree.classList.remove("sticky");
    btnTop.style.cssText = "display:none";
  }
});

// !header in Mob
function toggleMenu() {
  var menu = document.querySelector("#menu");
  menu.classList.toggle("activeMenu");
  menu.classList.add("animate__animated", "animate__fadeInRight");
  // Check if the menu is active and toggle the body's scrolling
  if (menu.classList.contains("activeMenu")) {
    document.body.style.overflow = "hidden"; // Disable scrolling
  } else {
    document.body.style.overflow = "auto"; // Enable scrolling
  }
}
function closeMobileMenu(){
  var menu = document.querySelector("#menu");
  menu.classList.remove("activeMenu");
}

// !Btn To Scrool Top
const btnTop = document.querySelector(".btnTop");
btnTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// !Swipper
var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
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
