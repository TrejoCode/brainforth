/**
 * @description Main functionallity
 */

$(document).ready(function () {
  // Initialize Owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
});

// Obtener el Node del formulario
const form = document.getElementById("contact-form");

// Crear un escuchador del evento "submit"
form.addEventListener("submit", async (currentForm) => {
  currentForm.preventDefault();

  // Payload para el body con todo los campos capturados
  const payload = {
    name: currentForm.target.name.value,
    email: currentForm.target.email.value,
    message: currentForm.target.message.value,
  };

  // Mostar en consola para depurar (De aplicar)
  console.info(payload);

  try {
    // Enviar el formulario
    const request = await fetch("https://api.yourweb.com", {
      method: "POST",
      body: payload,
    });

    // Obtener la respuesta del servidor de existir, en formato JSON (De aplicar)
    const response = await request.json();

    // Realizar cualquier alteración del DOM en caso de obtener una respuesta exitosa (De aplicar)

    if (response) {
      console.info(
        "Aquí deberíamos enviar al DOM algún contenido de exitoso para el cliente"
      );
    }
  } catch (error) {
    console.warn("Ocurrió un error al enviar el formulario, detalles: ", error);
  }
});
