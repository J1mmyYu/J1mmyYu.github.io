document.addEventListener('DOMContentLoaded', () => {
  console.log("projects.js loaded");

  // 開啟 modal
  document.querySelectorAll('.hero-image').forEach(item => {
    item.addEventListener('click', () => {
      const modalId = item.getAttribute('data-modal');
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('open');
      }
    });
  });

  // 關閉 modal：按 ×
  document.querySelectorAll('.close-lightbox').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.lightbox').classList.remove('open');
    });
  });

  // 關閉 modal：點背景區域
  document.querySelectorAll('.lightbox').forEach(modal => {
    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  });
});
