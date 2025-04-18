    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

        // Captura los valores de los campos del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Construye el mensaje para WhatsApp
        const whatsappMessage = `Hola, mi nombre es ${name}.\nEmail: ${email}\nAsunto: ${subject}\nMensaje: ${message}`;

        // Codifica el mensaje para que sea seguro en una URL
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // Construye el enlace de WhatsApp utilizando la API de WhatsApp
        const whatsappLink = `https://api.whatsapp.com/send?phone=3175378434&text=${encodedMessage}`;

        // Abre el enlace de WhatsApp en una nueva pestaña
        window.open(whatsappLink, '_blank');
    });
