
const form = document.getElementById('contactForm');

if (form) {
  function phoneMask(value) {
  const digits = value.replace(/\D/g, '');

  let result = '+7';

  if (digits.length > 1) result += ' (' + digits.substring(1,4);
  if (digits.length >= 5) result += ') ' + digits.substring(4,7);
  if (digits.length >= 8) result += '-' + digits.substring(7,9);
  if (digits.length >= 10) result += '-' + digits.substring(9,11);

  return result;
}
const phoneInput = form.querySelector('input[name="phone"]');

phoneInput.addEventListener('input', () => {
  phoneInput.value = phoneMask(phoneInput.value);
});

  form.addEventListener('submit', async e => {
    e.preventDefault();


    await fetch('https://formcarry.com/s/rKL4x1Gr5x1', {
      method: 'POST',
      body: new FormData(form)
    });

    form.reset();
    alert('Заявка отправлена');
  });
}
