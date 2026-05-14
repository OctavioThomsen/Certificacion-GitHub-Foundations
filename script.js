// Lógica para mostrar el mensaje al presionar el botón

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('btn-prueba');
  const modal = document.getElementById('mensaje-modal');
  if (btn && modal) {
    btn.addEventListener('click', () => {
      modal.classList.add('modal-visible');
      setTimeout(() => {
        modal.classList.remove('modal-visible');
      }, 1800);
    });
  }
});
