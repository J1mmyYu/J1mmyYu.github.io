const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox-caption');
const closeBtn = document.querySelector('.close-lightbox');

galleryItems.forEach(item => {
  item.addEventListener('click', e => {
    // 避免點到 Learn More 鍵也觸發 lightbox
    if (e.target.tagName.toLowerCase() === 'a') return;

    lightboxImage.src = item.dataset.src;
    lightboxCaption.innerHTML = item.querySelector('.gallery-caption').innerHTML;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.style.display = 'none';
  }
});
