document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section-header');

  sections.forEach(section => {
    section.addEventListener('click', function () {
      const content = this.nextElementSibling;
      this.classList.toggle('collapsed');
      
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
});
