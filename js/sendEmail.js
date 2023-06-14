function sendEmail(name, email, message) {
    // Configurar el mensaje de correo electrónico
    const mailOptions = {
      from: 'your-email@gmail.com', // Coloca aquí tu dirección de correo electrónico
      to: 'shalomsolutiontech@gmail.com', // Coloca aquí la dirección de correo electrónico de destino
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };
  
    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.error(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
  
  // Exportar la función sendEmail para poder utilizarla en otros archivos
  module.exports = sendEmail;

  const form = document.querySelector('.form-group');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const messageInput = document.querySelector('textarea');

    const name = nameInput.value;
    const email = emailInput.value;
    const message = messageInput.value;

    sendEmail(name, email, message); // Llama a la función sendEmail para enviar el correo electrónico

    // Restablecer el formulario
    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
    
  });

  console.log(sendEmail);