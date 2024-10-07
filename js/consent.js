document.addEventListener('DOMContentLoaded', function () {
  // Verificar si el usuario ya aceptó el mensaje de privacidad
  if (!localStorage.getItem('privacyAccepted')) {
    // Mostrar el mensaje de privacidad
    document.getElementById('privacyMessage').style.display = 'block';
  }

  // Agregar evento al botón para aceptar el mensaje
  const acceptButton = document.getElementById('acceptPrivacy');
  if (acceptButton) {
    acceptButton.addEventListener('click', function () {
      // Ocultar el mensaje de privacidad
      document.getElementById('privacyMessage').style.display = 'none';
      // Guardar en localStorage que el usuario aceptó el mensaje
      localStorage.setItem('privacyAccepted', 'true');
    });
  } else {
    console.error('Botón de aceptación no encontrado');
  }
});