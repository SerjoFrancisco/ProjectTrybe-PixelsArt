// gerador de cores retirado deste link https://css-tricks.com/snippets/javascript/random-hex-color/
const pallet = document.getElementsByClassName('color');
function changePallet() {
  for (let i = 1; i < pallet.length; i += 1) {
    pallet[i].style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
