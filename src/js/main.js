// EnergizedSEO - Main JavaScript
// Mobile menu toggle and smooth scrolling handled inline for performance

// Add scroll-based header background
(function() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
      header.style.background = 'rgba(15, 23, 42, 0.95)';
    }
  });
})();