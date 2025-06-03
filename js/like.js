// like.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.like-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const icon = btn.querySelector('i');
      icon.classList.toggle('fa-regular');
      icon.classList.toggle('fa-solid');
      icon.classList.toggle('liked');
    });
  });
});
