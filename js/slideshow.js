// slideshow.js
document.addEventListener('DOMContentLoaded', function () {
  const slideshow = document.getElementById('hero-slideshow');
  if (!slideshow) return;

  const images = [
    'images/lands/Buck.jpg',
    'images/seas/Humpback Whale.jpg',
    'images/lands/Leopard.jpg'
  ];
  let index = 0;

  setInterval(() => {
    slideshow.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % images.length;
      slideshow.src = images[index];
      slideshow.style.opacity = 1;
    }, 500);
  }, 4000);
});
