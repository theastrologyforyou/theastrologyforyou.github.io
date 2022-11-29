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
