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
        button.classList.remove("bg-[#D7D7D7]", "text-white");
        button.classList.add("bg-[#0F0F78]", "text-white");
        header.classList.add("text-[#0F0F78]");
        title.classList.add("text-[#0F0F78]", "font-bold");
      } else {
        content.classList.add("hidden");
        button.classList.remove("bg-[#0F0F78]", "text-white");
        button.classList.add("bg-[#D7D7D7]", "text-white");
        header.classList.remove("text-[#0F0F78]");
        title.classList.remove("text-[#0F0F78]", "font-bold");
      }
    } else {
      content.classList.add("hidden");
      button.classList.remove("bg-[#D7D7D7]", "text-white");
      button.classList.add("bg-[#D7D7D7]", "text-white");
      header.classList.remove("text-blue-700");
      title.classList.remove("text-[#0F0F78]", "font-bold");
    }
  });
}

const slider = document.getElementById('testimonial-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentIndex = 1;

  const updateSlider = () => {
    const cards = slider?.children;
    const totalCards = cards?.length;

    // Reset all cards' opacity and scale
    Array.from(cards)?.forEach((card, index) => {
      if (index === currentIndex) {
        card.classList.add('opacity-100', 'scale-100');
        card.classList.remove('opacity-50', 'scale-90');
      } else {
        card.classList.add('opacity-50', 'scale-90');
        card.classList.remove('opacity-100', 'scale-100');
      }
    });

    // Move the slider horizontally
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  };

prevBtn?.addEventListener('click', () => {
  currentIndex = currentIndex === 0 ? 3 : currentIndex - 1;
  updateSlider();
});

nextBtn?.addEventListener('click', () => {
  currentIndex = currentIndex === 3 ? 0 : currentIndex + 1;
  updateSlider();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % 4; // Loop through the 4 items
  updateSlider();
}, 2000); // 2000ms = 2 seconds

window.addEventListener('DOMContentLoaded', updateSlider);
  

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