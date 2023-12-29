document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (event) {
      if (!validateForm()) {
        event.preventDefault();
      }
    });
  
    function validateForm() {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (name === '' || email === '' || message === '') {
        alert('All fields must be filled out');
        return false;
      }
  
      return true;
    }
  });
  