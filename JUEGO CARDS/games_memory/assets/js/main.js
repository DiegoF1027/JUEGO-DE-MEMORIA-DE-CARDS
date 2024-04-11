// main.js

var objClass;
const contId = "containerGame";
const progress = "progressbarId";
const speed = 500;
const maxMilliseconds = 2000;

function setLevel(value) {
  objClass = new Game(contId, value, progress, speed, maxMilliseconds);
  objClass.objChronometer.clearChronometer(); // Reiniciar el cronómetro al cambiar el nivel de dificultad
  objClass.startGame(); // Iniciar el juego con la nueva dificultad
}

// Espera a que se cargue el DOM antes de crear la instancia de Game
document.addEventListener("DOMContentLoaded", function () {
  // Define los parámetros necesarios
  const contGameId = 'containerGame'; // ID del contenedor de juego en tu HTML

  // Crea una nueva instancia de la clase Game
  objClass = new Game(contGameId, level, progress, speed, maxMilliseconds);
});
