// Navigation and content work without JavaScript; printing is an enhancement.
document.querySelectorAll('[data-print]').forEach((button) => {
  button.hidden = false;
  button.addEventListener('click', () => window.print());
});
