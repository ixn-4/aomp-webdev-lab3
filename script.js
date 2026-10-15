document.addEventListener("DOMContentLoaded", () => {
  const interactiveCards = document.querySelectorAll('.menu-category, .special-card');
  
  interactiveCards.forEach(card => {
    card.onmouseover = () => {
      card.classList.add('active-border');
    };

    card.onmouseout = () => {
      card.classList.remove('active-border');
    };
  });
});

function navigateMenu(selectElement) {
  const selectedUrl = selectElement.value;
  if (selectedUrl) {
    window.location.href = selectedUrl;
    
    selectElement.selectedIndex = 0; 
  }
}