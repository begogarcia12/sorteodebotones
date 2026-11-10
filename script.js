const btnRed = document.getElementById('btn-red');
const btnBlue = document.getElementById('btn-blue');
const resultArea = document.getElementById('result-area');
const resultBanner = document.getElementById('result-banner');
const resultMessage = document.getElementById('result-message');
const resultDetail = document.getElementById('result-detail');
const btnReset = document.getElementById('btn-reset');

/**
 * Ejecuta una jugada al elegir uno de los botones.
 * Muestra aleatoriamente "Has ganado" o "Has perdido".
 * @param {'rojo' | 'azul'} colorElegido
 */
function elegirDestino(colorElegido) {
  const haGanado = Math.random() < 0.5;

  // Bloquear botones hasta reiniciar y resaltar la opción elegida
  btnRed.disabled = true;
  btnBlue.disabled = true;

  if (colorElegido === 'rojo') {
    btnRed.classList.add('is-selected');
    btnBlue.classList.add('is-dimmed');
  } else {
    btnBlue.classList.add('is-selected');
    btnRed.classList.add('is-dimmed');
  }

  // Configurar el mensaje de resultado
  resultBanner.classList.remove('is-win', 'is-lose');
  resultBanner.classList.add(haGanado ? 'is-win' : 'is-lose');

  resultMessage.textContent = haGanado ? 'Has ganado' : 'Has perdido';
  resultDetail.textContent = `Elegiste el botón ${colorElegido}.`;

  // Mostrar el área de resultado y el botón para volver a jugar
  resultArea.hidden = false;
  btnReset.focus();
}

/**
 * Reinicia el juego a su estado inicial para volver a jugar.
 */
function reiniciarJuego() {
  btnRed.disabled = false;
  btnBlue.disabled = false;
  btnRed.classList.remove('is-selected', 'is-dimmed');
  btnBlue.classList.remove('is-selected', 'is-dimmed');

  resultArea.hidden = true;
  resultMessage.textContent = '';
  resultDetail.textContent = '';
}

btnRed.addEventListener('click', () => elegirDestino('rojo'));
btnBlue.addEventListener('click', () => elegirDestino('azul'));
btnReset.addEventListener('click', reiniciarJuego);
