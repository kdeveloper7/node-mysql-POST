document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
  
    // Obtener los datos del formulario
    const formData = {
      name: document.getElementById('name').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      subject: document.getElementById('subject').value,
      details: document.getElementById('details').value
    };
  
    // Hacer la solicitud POST
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        document.getElementById('responseMessage').textContent = 'Formulario enviado con éxito';
        document.getElementById('responseMessage').classList.remove('hidden');
        document.getElementById('contactForm').reset(); // Limpiar el formulario
      } else {
        throw new Error('Error al enviar el formulario');
      }
    })
    .catch(error => {
      document.getElementById('responseMessage').textContent = error.message;
      document.getElementById('responseMessage').classList.remove('hidden');
      document.getElementById('responseMessage').classList.add('text-red-500');
    });
  });
  