document.addEventListener("DOMContentLoaded", () => {
  const interactiveCards = document.querySelectorAll('.menu-category, .special-card');
  
  interactiveCards.forEach(card => {
    // Add the yellow border when the mouse enters
    card.addEventListener('mouseenter', () => {
      card.classList.add('active-border');
    });

    // Remove the yellow border when the mouse leaves
    card.addEventListener('mouseleave', () => {
      card.classList.remove('active-border');
    });
    
  });
});