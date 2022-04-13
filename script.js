// gerador de cores retirado deste link https://css-tricks.com/snippets/javascript/random-hex-color/
const pallet = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const cleaner = document.getElementById('clear-board');
const form = document.getElementById('board-size');
const button = document.getElementById('generate-board');
const board = document.getElementById('pixel-board');
// Muda cores quando carrega,através dessa função que multiplica o random por quase todas as cores posiveis, excluindo o branco, e após isso converte para string em hexadecimal
window.onload = function changePallet() {
  pallet[0].style.backgroundColor = 'black';
  for (let i = 1; i < pallet.length; i += 1) {
    pallet[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777000).toString(16)}`;
  }
};
// Funções de criar o quadro quando inicia e definição de pixels inicial
let n = 5;
function createLines() {
  for (let i = 0; i < n; i += 1) {
    const line = document.createElement('li');
    line.className = 'lines';
    board.appendChild(line);
  }
}
const linhas = document.getElementsByClassName('lines');
createLines();
function createPixels() {
  for (let i = 0; i < n; i += 1) {
    for (let j = 0; j < n; j += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';
      linhas[i].appendChild(pixel);
    }
  }
}
createPixels();

// Muda o quadro dinamicamente
function changeBoard() {
  if (form.value === '') {
    alert('Board inválido!');
  }
  if (parseInt(form.value, 10) > 50) {
    n = 50;
  } else if (parseInt(form.value, 10) < 5) {
    n = 5;
  } else {
    n = parseInt(form.value, 10);
  }
  board.innerHTML = '';
  createLines();
  createPixels();
  pincel();
}
button.addEventListener('click', changeBoard);

// Seleciona a cor que irá pintar e aplica o escutador de evento em todas as cores
sessionStorage.setItem('cor', 'black');
function selectColor(event) {
  sessionStorage.setItem('cor', event.target.style.backgroundColor);
  for (let i = 0; i < pallet.length; i += 1) {
    pallet[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}
function changeColor() {
  pallet[0].className = 'color selected';
  for (let i = 0; i < pallet.length; i += 1) {
    pallet[i].addEventListener('click', selectColor);
  }
}
changeColor();

// pinta os pixels com a cor escolhida
function paint(event) {
  const alvo = event.target;
  alvo.style.backgroundColor = sessionStorage.getItem('cor');
}
function pincel() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paint);
  }
}
pincel();

// limpa os pixels
function clean() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#ffffff';
  }
}
cleaner.addEventListener('click', clean);
