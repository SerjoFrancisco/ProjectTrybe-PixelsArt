// gerador de cores retirado deste link https://css-tricks.com/snippets/javascript/random-hex-color/
const pallet = document.getElementsByClassName('color');
window.onload = function changePallet() {
  for (let i = 1; i < pallet.length; i += 1) {
    pallet[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
};

const board = document.getElementById('pixel-board');
const n = 5;
function createLines() {
  for (let i = 0; i < n; i += 1) {
    board.appendChild(document.createElement('li'));
  }
};
