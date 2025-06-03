document.addEventListener('DOMContentLoaded', () => {
  console.log("menu.js loaded");

  const hamburger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('close-btn');

  if (!hamburger || !sidebar || !closeBtn) {
    console.error("❌ Missing DOM elements");
    return;
  }

  hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked");
    sidebar.classList.toggle('open');
  });

  closeBtn.addEventListener('click', () => {
    console.log("Close clicked");
    sidebar.classList.remove('open');
  });
});
