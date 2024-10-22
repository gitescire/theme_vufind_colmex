  document.addEventListener('DOMContentLoaded', function () {
    // Selecciona el contenedor de los elementos
    const container = document.getElementById('random-list');

    // Inicializa Shuffle.js en el contenedor
    const shuffleInstance = new window.Shuffle(container, {
      itemSelector: '.shuffle-item'
    });


    function randomOrder() {
      return Math.random() - 0.5;
    }


    shuffleInstance.sort({ randomize: true });


  });

  