// Scroll trigger animation
AOS.init();


// Holomoon
const backgroundElement = document.querySelector('.holomoon-glow');
window.onscroll = (e) => {
  const minScroll = window.innerHeight;
  const maxScroll = document.body.clientHeight - minScroll;

  const determinePercentage = (scroll) => {
    return Math.floor((actualScroll * 180) / maxScroll);
  };

  const actualScroll = Math.floor(window.scrollY);
  const actualPercentage = determinePercentage(actualScroll);

  backgroundElement.style.cssText = `background-position: ${actualPercentage}% 50%;`;
};


// Swiper Slider
const homeSwiper = new Swiper('.home-swiper', {
  centeredSlides: true,
  slidesPerView: 1.3,
  spaceBetween: 0,
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Responsive setting
  breakpoints: {
    414: {
      slidesPerView: 1.4,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 1.8,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1.3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1.5,
      spaceBetween: 0,
    },
    1200: {
      slidesPerView: 1.5,
      spaceBetween: -180,
    },
    1400: {
      slidesPerView: 1.5,
      spaceBetween: -320,
    },
    1600: {
      slidesPerView: 1.5,
      spaceBetween: -200,
    },
    1800: {
      slidesPerView: 1.5,
      spaceBetween: -303,
    },
    2300: {
      slidesPerView: 1.5,
      spaceBetween: -520,
    },
  },
});
