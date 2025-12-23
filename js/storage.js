const inputs = document.querySelectorAll('#contactForm input');

inputs.forEach(input => {
  input.value = localStorage.getItem(input.name) || '';
  input.addEventListener('input', () => {
    localStorage.setItem(input.name, input.value);
  });
});

history.pushState({}, '', '/');
