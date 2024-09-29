/* This is an example JavaScript file, feel free to remove/edit it anytime */
console.log(
  "%cProject by BigDevSoon",
  'font-size: 40px; font-weight: bold; color: #8A2BE2; font-family: "Comic Sans MS", cursive, sans-serif;'
);
console.log("Check out more projects at https://bigdevsoon.me");

// toggle input search bar

const input = document.querySelector('input');
const searchButton = document.querySelector('.fa-search');
let isSearchBarOpen = false; 

searchButton.addEventListener('click', () => {
  if (!isSearchBarOpen) {
    input.style.width = '5rem'; 
    isSearchBarOpen = true;
  } else {
    input.style.width = '0'; 
    isSearchBarOpen = false;
  }
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView:6,
  spaceBetween:10,
  enabled:true,

  breakpoints:{
  320:{
    slidesPerView:3,
    spaceBetween:10
   },
   640:{
    slidesPerView:6,
    spaceBetween:10
   },
   450:{
    slidesPerView:3,
    spaceBetween:10
   }
  },
  autoplay: {
    delay: 400,  // Delay between slides in milliseconds
    disableOnInteraction: false,
    pauseOnMouseEnter:true,  // Keep autoplay active after user interactions
  },

  speed: 1000, 

});

const slides = document.querySelectorAll('.swiper-slide');
slides.forEach(slide => {
  slide.addEventListener('mouseenter', () => {
    slides.forEach(s => {
      if (s !== slide) {
        s.style.opacity = '0.5';
        s.style.filter = 'grayscale(100%)'; // Apply grayscale filter to non-hovered slides
      }
    });
  });

  slide.addEventListener('mouseleave', () => {
    slides.forEach(s => {
      s.style.opacity = '1';
      s.style.filter = 'grayscale(0%)';  // Reset grayscale filter
    });
  });
});


const burgerMenu = document.querySelector('.fa-bars')
const listMenu = document.querySelector('.listMenu')

burgerMenu.addEventListener('click',()=>{
  // alert('test')
  listMenu.classList.toggle('active');
})