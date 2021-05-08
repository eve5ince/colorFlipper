const colors = ['Aquamarine', 'Aqua', 'Azure', 'Chartreuse', 'Cornsilk', 'GhostWhite', 'FloralWhite', 'Gainsboro', 'Fuchsia', 'GreenYellow', 'HoneyDew', 'Ivory', 'Lavender', 'LawnGreen', 'LightCyan', 'LavenderBlush', 'LightYellow', 'Lime', 'Linen', 'Magenta', 'MediumBlue', 'MistyRose', 'MediumSpringGreen', 'OldLace', 'MintCream', 'PapayaWhip', 'PowderBlue', 'RoyalBlue', 'SeaShell', 'Snow', 'SpringGreen', 'White'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');


btn.addEventListener('click', function () {
  const randomNum = getNum();
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
})

function getNum() {
  return Math.floor(Math.random() * colors.length);
}

























