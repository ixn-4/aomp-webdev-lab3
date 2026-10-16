document.addEventListener("DOMContentLoaded", () => {
  // 2. CAROUSEL CLONING & ROTATION LOGIC
  const track = document.getElementById('specials-carousel');
  let autoScrollInterval;

  if (track) {
    const originalCards = Array.from(track.children);
    originalCards.forEach(card => {
      track.appendChild(card.cloneNode(true));
    });

    function getScrollStep() {
      const firstCard = track.querySelector('.special-card');
      if (!firstCard) return 0;
      const cardWidth = firstCard.getBoundingClientRect().width;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      return cardWidth + gap;
    }

    function startAutoScroll() {
      stopAutoScroll();
      autoScrollInterval = setInterval(() => {
        const scrollAmount = getScrollStep();
        if (!scrollAmount) return;

        const originalSetWidth = scrollAmount * originalCards.length;

        if (Math.ceil(track.scrollLeft) >= originalSetWidth - 5) {
          track.style.scrollBehavior = 'auto'; 
          track.scrollLeft = 0; 
          void track.offsetWidth; 
          track.style.scrollBehavior = 'smooth'; 
          track.scrollBy({ left: scrollAmount }); 
        } else {
          track.scrollBy({ left: scrollAmount, behavior: 'smooth' }); 
        }
      }, 5000); 
    }

    function stopAutoScroll() {
      if (autoScrollInterval) clearInterval(autoScrollInterval);
    }

    startAutoScroll();

    track.addEventListener('mouseover', stopAutoScroll);
    track.addEventListener('mouseout', startAutoScroll);
    track.addEventListener('touchstart', stopAutoScroll, { passive: true });
    track.addEventListener('touchend', startAutoScroll);
    window.addEventListener('resize', () => {
      track.scrollLeft = 0;
    });
  }
});

// 3. HOVER EVENT FUNCTIONS 
function setActive(cardElement) {
  cardElement.classList.add('active-border');
}

function removeActive(cardElement) {
  cardElement.classList.remove('active-border');
}

// 4. FAQ ACCORDION LOGIC
function toggleFAQ(clickedFaq) {
  const allFaqs = document.querySelectorAll('.faq-item');
  allFaqs.forEach(faq => {
    if (faq !== clickedFaq) {
      faq.classList.remove('active');
    }
  });

  clickedFaq.classList.toggle('active');
}

const homepageCards = document.querySelectorAll('.menu-category, .special-card');

homepageCards.forEach(card => {
  card.addEventListener('click', () => {
    const category = card.getAttribute('data-category'); 
    
    localStorage.setItem('selectedCategory', category);
    
    window.location.href = 'menu.html';
  });
});