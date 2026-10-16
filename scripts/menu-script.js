// Listener for the hamburger icon
document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('#nav-links a');

    if (navToggle) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.checked = false;
            });
        });
    }
});

// Makes the food type buttons show only the respective type
const menuButtons = document.querySelectorAll('.menu-buttons');
const foodSections = document.querySelectorAll('.food-item');

menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    
    menuButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active'); 

    const targetCategory = button.getAttribute('data-category');

    foodSections.forEach(section => {
      if (section.classList.contains(targetCategory)) {
        section.classList.remove('visible', 'hidden'); 
        void section.offsetWidth; 
        section.classList.add('visible');
        
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });

      } else {
        section.classList.add('hidden');
        section.classList.remove('visible');
      }
    });
    
  });
});

// Make the buttons inside the drinks card change the price per size
const containers = document.querySelectorAll('.drinks-card');

containers.forEach(container => {
  const buttons = container.querySelectorAll('.size-btn');
  const priceValue = container.querySelector('#price-value');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      
      button.classList.add('active');
      
      const newPrice = button.getAttribute('data-price');
      priceValue.textContent = newPrice;
    });
  });
});