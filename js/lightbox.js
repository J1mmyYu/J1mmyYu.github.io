// lightbox.js

// 1. 取出所有 .gallery-item 和 lightbox 元素
const galleryItems   = document.querySelectorAll('.gallery-item');
const lightbox       = document.querySelector('.lightbox');
const lightboxImage  = document.querySelector('.lightbox-image');
const lightboxCaption= document.querySelector('.lightbox-caption');
const closeBtn       = document.querySelector('.close-lightbox');

// 2. 點擊任何 gallery-item 時，顯示 lightbox 並載入對應圖片與說明
galleryItems.forEach(item => {
  item.addEventListener('click', e => {
    // 如果點的是 button（More 按鈕），就不要開啟 lightbox
    if (e.target.classList.contains('btn-more')) return;

    lightboxImage.src = item.dataset.src;
    lightboxCaption.innerHTML = item.querySelector('.gallery-caption').innerHTML;
    lightbox.style.display = 'flex';
  });
});


// 3. 點擊關閉按鈕或背景，隱藏 lightbox
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
// 4. 按下 ESC 鍵時也關閉 lightbox
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    lightbox.style.display = 'none';
  }
});

