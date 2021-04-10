window.onload = () => {
  pixelTableCreate(5);
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let pixColor = '#';
    for (let index = 0; index < 6; index += 1) {
      pixColor += letters[Math.floor(Math.random() * 16)];
    }
    return pixColor;
  }

  const colorPixels = document.querySelectorAll('#color');
  for (let index = 0; index < colorPixels.length; index += 1) {
    const colorGenerated = getRandomColor();
    colorPixels[index].style.backgroundColor = colorGenerated;
  }
};

function pixelTableCreate(size) {
  if (size < 5) {
    size = 5;
  } else if (size > 50) {
    size = 50;
  }
  for (let index = 0; index < size; index += 1) {
    const pixelContainer = document.createElement('div');
    pixelContainer.classList.add('column');
    for (let index2 = 0; index2 < size; index2 += 1) {
      const pixelBox = document.createElement('div');
      pixelBox.classList.add('pixel');
      const pixelBoard = document.querySelector('#pixel-board');
      pixelBoard.appendChild(pixelContainer);
      pixelContainer.appendChild(pixelBox);
    }
  }
}

const btnSize = document.querySelector('#generate-board');

btnSize.addEventListener('click', () => {
  const inputSize = document.querySelector('#board-size');
  const pixelSize = inputSize.value;
  if (pixelSize === '') {
    alert('Board inválido!');
  } else {
    pixelTableCreate(pixelSize);
  }
});

// Gerar cor aleatoria, resposta no StackOverflow: https://stackoverflow.com/questions/1484506/random-color-generator;

// Math.floor : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor

const colorPaletteContainer = document.querySelector('#color-palette');
colorPaletteContainer.addEventListener('click', (event) => {
  const searchElement = document.querySelector('.selected');
  searchElement.classList.remove('selected');
  const colorPaletteSelected = event.target;
  colorPaletteSelected.classList.add('selected');
});

// Para adicionar a logica abaixo de trocar as cores dos pixels eu utilizei o metodo getComputedStyle
// acessado por este link: https://www.w3schools.com/jsref/jsref_getcomputedstyle.asp

const pixelBoardSquare = document.querySelector('#pixel-board');
pixelBoardSquare.addEventListener('click', (event2) => {
  const colorSelected = document.querySelector('.selected');
  const pixelToPrint = event2.target;
  pixelToPrint.style.backgroundColor = window.getComputedStyle(colorSelected).backgroundColor;
});

const buttonClearColor = document.querySelector('#clear-board');
buttonClearColor.addEventListener('click', () => {
  const pixelsColored = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelsColored.length; index += 1) {
    pixelsColored[index].style.backgroundColor = 'rgb(255, 255, 255)';
  }
});
