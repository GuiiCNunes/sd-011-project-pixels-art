let colorPalette = document.querySelector('#color-palette');

let cores = ['black', 'red', 'blue', 'green', 'pink', 'yellow', 'brown'];

for(let index = 0; index < cores.length; index += 1){
  let nameCor = cores[index];
  let colorsDiv = document.createElement('div');
  colorPalette.appendChild(colorsDiv);
  colorsDiv.className = 'color';
  colorsDiv.id = nameCor;
  colorsDiv.innerHTML = nameCor;

  if(colorsDiv.innerText.includes('black')){
    colorsDiv.className += ' selected'
  }

}

for(let index = 0; index < cores.length; index += 1){
  let cor = document.getElementById(cores[index]);
  cor.style.backgroundColor = cores[index];
}

