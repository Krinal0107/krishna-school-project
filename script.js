const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.remove("-translate-x-full");
});

menuClose.addEventListener("click", () => {
  menu.classList.add("-translate-x-full");
});


function toggleAccordion(id) {
  const allContents = document.querySelectorAll("[id^='content-']");
  const allButtons = document.querySelectorAll("[id^='button-']");
  const allHeaders = document.querySelectorAll("[id^='header-']");
  const allTitles = document.querySelectorAll("[id^='title-']");

  allContents.forEach((content, index) => {
    const button = allButtons[index];
    const header = allHeaders[index];
    const title = allTitles[index];
    const accordionId = index + 1;

    if (accordionId === id) {
      if (content.classList.contains("hidden")) {
        content.classList.remove("hidden");
        button.classList.remove("bg-gray-200", "text-gray-700");
        button.classList.add("bg-blue-700", "text-white");
        header.classList.add("text-blue-700");
        title.classList.add("text-blue-700", "font-bold");
      } else {
        content.classList.add("hidden");
        button.classList.remove("bg-blue-700", "text-white");
        button.classList.add("bg-gray-200", "text-gray-700");
        header.classList.remove("text-blue-700");
        title.classList.remove("text-blue-700", "font-bold");
      }
    } else {
      content.classList.add("hidden");
      button.classList.remove("bg-blue-700", "text-white");
      button.classList.add("bg-gray-200", "text-gray-700");
      header.classList.remove("text-blue-700");
      title.classList.remove("text-blue-700", "font-bold");
    }
  });
}

const slider = document.getElementById("testimonial-slider");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const testimonials = document.querySelectorAll(".testimonial-card");
let currentIndex = 0;

function updateSlider() {
  testimonials.forEach((card, index) => {
    card.classList.remove("testimonial-active");
    if (index === currentIndex) {
      card.classList.add("testimonial-active");
    }
  });
  const offset = currentIndex * -100;
  slider.style.transform = `translateX(${offset}%)`;
}

// prevBtn.addEventListener("click", () => {
//   currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//   updateSlider();
// });

// nextBtn.addEventListener("click", () => {
//   currentIndex = (currentIndex + 1) % testimonials.length;
//   updateSlider();
// });

setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateSlider();
}, 5000);

function setActiveNavItem() {
    const navItems = document.querySelectorAll('.nav-item');
    const currentPath = window.location.pathname;

    navItems.forEach((item) => {
      // Get the href attribute of the current nav item
      const navPath = item.getAttribute('href');

      // Add 'active' class if the navPath matches the currentPath
      if (currentPath === navPath) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // Run the function on page load
  window.addEventListener('DOMContentLoaded', setActiveNavItem);