const printButton = document.querySelector('#print');
printButton.hidden = false;
printButton.addEventListener('click', () => window.print());

const viewer = document.querySelector('#viewer');
if (typeof viewer.showModal === 'function') {
  document.querySelectorAll('[data-photo]').forEach((link) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      const image = viewer.querySelector('img');
      image.src = link.href;
      image.alt = link.querySelector('img').alt;
      viewer.querySelector('figcaption').textContent = link.closest('figure').querySelector('figcaption').textContent;
      viewer.showModal();
    });
  });
  viewer.addEventListener('click', (event) => {
    if (event.target === viewer) viewer.close();
  });
}
