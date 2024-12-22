const menuToggle = document.getElementById('menu-toggle')
const menuClose = document.getElementById('menu-close')
const menu = document.getElementById('menu')

menuToggle.addEventListener('click', () => {
  menu.classList.remove('-translate-x-full')
})

menuClose.addEventListener('click', () => {
  menu.classList.add('-translate-x-full')
})

function toggleAccordion (id) {
  const allContents = document.querySelectorAll("[id^='content-']")
  const allButtons = document.querySelectorAll("[id^='button-']")
  const allHeaders = document.querySelectorAll("[id^='header-']")
  const allTitles = document.querySelectorAll("[id^='title-']")

  allContents.forEach((content, index) => {
    const button = allButtons[index]
    const header = allHeaders[index]
    const title = allTitles[index]
    const accordionId = index + 1

    if (accordionId === id) {
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden')
        button.classList.remove('bg-[#D7D7D7]', 'text-white')
        button.classList.add('bg-[#0F0F78]', 'text-white')
        header.classList.add('text-[#0F0F78]')
        title.classList.add('text-[#0F0F78]', 'font-bold')
      } else {
        content.classList.add('hidden')
        button.classList.remove('bg-[#0F0F78]', 'text-white')
        button.classList.add('bg-[#D7D7D7]', 'text-white')
        header.classList.remove('text-[#0F0F78]')
        title.classList.remove('text-[#0F0F78]', 'font-bold')
      }
    } else {
      content.classList.add('hidden')
      button.classList.remove('bg-[#D7D7D7]', 'text-white')
      button.classList.add('bg-[#D7D7D7]', 'text-white')
      header.classList.remove('text-blue-700')
      title.classList.remove('text-[#0F0F78]', 'font-bold')
    }
  })
}

// const slider = document.getElementById('testimonial-slider')
// const prevBtn = document.getElementById('prev-btn')
// const nextBtn = document.getElementById('next-btn')
// let currentIndex = 1

// const updateSlider = () => {
//   const cards = slider?.children
//   const totalCards = cards?.length

//   // Reset all cards' opacity and scale
//   Array.from(cards)?.forEach((card, index) => {
//     if (index === currentIndex) {
//       card.classList.add('opacity-100', 'scale-100')
//       card.classList.remove('opacity-50', 'scale-90')
//     } else {
//       card.classList.add('opacity-50', 'scale-90')
//       card.classList.remove('opacity-100', 'scale-100')
//     }
//   })

//   // Move the slider horizontally
//   slider.style.transform = `translateX(-${currentIndex * 100}%)`
// }

// prevBtn?.addEventListener('click', () => {
//   currentIndex = currentIndex === 0 ? 3 : currentIndex - 1
//   updateSlider()
// })

// nextBtn?.addEventListener('click', () => {
//   currentIndex = currentIndex === 3 ? 0 : currentIndex + 1
//   updateSlider()
// })

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % 4 // Loop through the 4 items
//   updateSlider()
// }, 2000) // 2000ms = 2 seconds

// const slider = document.getElementById('slides')
// const prevBtn = document.getElementById('prev-btn')
// const nextBtn = document.getElementById('next-btn')
// let currentIndex = 0 // Start at 0 for correct indexing

// const updateSlider = () => {
//   if (!slider) {
//     console.error('Slider element not found!')
//     return // Exit the function early if the slider doesn't exist
//   }

//   const cards = slider.children // No need for optional chaining here anymore
//   const totalCards = cards.length

//   if (totalCards === 0) {
//     console.warn('No cards found within the slider!')
//     return // Exit if there are no cards
//   }

//   // More robust way to handle the loop
//   for (let i = 0; i < totalCards; i++) {
//     const card = cards[i]
//     if (i === currentIndex) {
//       card.classList.add('opacity-100', 'scale-100')
//       card.classList.remove('opacity-100', 'scale-100')
//     } else {
//       card.classList.add('opacity-100', 'scale-100')
//       card.classList.remove('opacity-100', 'scale-100')
//     }
//   }

//   // Correct calculation of translateX
//   slider.style.transform = `translateX(-${currentIndex * (100 / totalCards)}%)` // Percentage per slide
// }

// // Check if the elements exist before adding event listeners
// if (prevBtn) {
//   prevBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + 4) % 4 // Wrap around correctly
//     updateSlider()
//   })
// }

// if (nextBtn) {
//   nextBtn.addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % 4 // Wrap around correctly
//     updateSlider()
//   })
// }

// // Initial update
// updateSlider() // Call updateSlider once initially to set the correct state

// const prevBtn = document.getElementById('prev-btn')
// const nextBtn = document.getElementById('next-btn')
// const container = document.querySelector('.swiper-wrapper')
// const slides = document.querySelectorAll('.swiper-slide')

// let currentIndex = 0 // Current slide index
// const slideWidth = slides[0].offsetWidth + 32 // Slide width (including gap)

// // Function to update the scroll position
// const updateScrollPosition = () => {
//   container.scrollTo({
//     left: currentIndex * slideWidth,
//     behavior: 'smooth'
//   })
// }

// nextBtn.addEventListener('click', () => {
//   if (currentIndex < slides.length - 1) {
//     currentIndex++
//   } else {
//     currentIndex = 0 // Loop back to the first slide
//   }
//   updateScrollPosition()
// })

// prevBtn.addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--
//   } else {
//     currentIndex = slides.length - 1 // Loop back to the last slide
//   }
//   updateScrollPosition()
// })

// slider.style.background = 'red'

// window.addEventListener('DOMContentLoaded', updateSlider)

// const prevBtn = document.getElementById('prev-btn')
// const nextBtn = document.getElementById('next-btn')
// // const container = document.getElementsByClassName('swiper-wrapper')[0]
// const slider = document.getElementById('slides')

// nextBtn.addEventListener('click', () => {
//   slider.scrollLeft += 330
// })

// prevBtn.addEventListener('click', () => {
//   slider.scrollLeft -= 330
// })

// document.addEventListener('DOMContentLoaded', () => {
//   const prevBtn = document.getElementById('prev-btn')
//   const nextBtn = document.getElementById('next-btn')
//   const slider = document.getElementsByClassName('swiper-container')[0]
//   // slider.computedStyleMap.background = 'red'

//   // if (prevBtn && nextBtn && slider) { // Check if elements exist
//   nextBtn.addEventListener('click', () => {
//     slider.scrollLeft += 330
//   })

//   prevBtn.addEventListener('click', () => {
//     slider.scrollLeft -= 330
//   })

// ... rest of your code ...
//   setActiveNavItem()
//   // } else {
//   // console.error('One or more required elements (prev-btn, next-btn, or slides) not found.')
//   // }
// })

function setActiveNavItem () {
  const navItems = document.querySelectorAll('.nav-item')
  const currentPath = window.location.pathname

  navItems.forEach((item) => {
    // Get the href attribute of the current nav item
    const navPath = item.getAttribute('href')

    // Add 'active' class if the navPath matches the currentPath
    if (currentPath === navPath) {
      item.classList.add('active')
    } else {
      item.classList.remove('active')
    }
  })
}

// Run the function on page load
window.addEventListener('DOMContentLoaded', setActiveNavItem)
