// gerador de cores retirado deste link https://css-tricks.com/snippets/javascript/random-hex-color/
const pallet = document.getElementsByClassName('color');
const pixels = document.getElementsByClassName('pixel');
const cleaner = document.getElementById('clear-board');
const form = document.getElementById('board-size');
const button = document.getElementById('generate-board');
const board = document.getElementById('pixel-board');
window.onload = function changePallet() {
  pallet[0].style.backgroundColor = 'black';
  for (let i = 1; i < pallet.length; i += 1) {
    pallet[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777214).toString(16)}`;
  }
};

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
sessionStorage.setItem('cor', 'black');
function selectColor(event) {
  sessionStorage.setItem('cor', event.target.style.backgroundColor);
}
function changeColor() {
  pallet[0].className = 'color selected';
  for (let i = 0; i < pallet.length; i += 1) {
    pallet[i].addEventListener('click', selectColor);
  }
}

changeColor();
function paint(event) {
  event.target.style.backgroundColor = sessionStorage.getItem('cor');
}
function pincel() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', paint);
  }
}
pincel();
function clean() {
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = '#ffffff';
  }
}
cleaner.addEventListener('click', clean);

function changeBoard() {
  if(form.value === ''){
    alert('Board inválido!')
  }
  if (parseInt(form.value, 10) > 50){
    n = 50;
  } else if (parseInt(form.value, 10) < 5){
    n = 5;
  } else {
  n = parseInt(form.value, 10);}
  // for (let i = 0; i < lines.length; i += 1) {
  //   lines[i].remove();
  // }
  // for (let j = 0; j < pixels.length; j += 1) {
  //   pixels[j].remove();
  //  }
  board.innerHTML = '';
  createLines();
  createPixels();
}
button.addEventListener('click', changeBoard);
