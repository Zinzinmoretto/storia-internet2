// index.js

// Quando il DOM è pronto
document.addEventListener('DOMContentLoaded', () => {

  // 1. SMOOTH SCROLL per tutti i link interni che iniziano con "#"
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').slice(1);
      const targetEl = document.getElementById(targetID);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 2. BACK-TO-TOP BUTTON
  const backToTop = document.createElement('button');
  backToTop.textContent = '⬆ Torna su';
  backToTop.id = 'back-to-top';
  backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    display: none;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background: #4caf50;
    color: white;
    cursor: pointer;
    z-index: 100;
  `;
  document.body.appendChild(backToTop);

  // Mostra/nascondi il pulsante al scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // 3. FOOTER DYNAMICO: anno corrente
  const footer = document.createElement('footer');
  footer.style.textAlign = 'center';
  footer.style.padding = '20px';
  footer.style.color = '#aaa';
  footer.innerHTML = `&copy; ${new Date().getFullYear()} Storia di Internet`;
  document.body.appendChild(footer);

});
