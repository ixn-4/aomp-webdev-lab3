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
