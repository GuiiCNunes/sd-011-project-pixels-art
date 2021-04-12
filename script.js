function createSquares() {
const elemento = document.querySelectorAll('.color');
	elemento[0].style.backgroundColor = 'black';
	elemento[1].style.backgroundColor = 'yellow';
	elemento[2].style.backgroundColor = 'blue';
	elemento[3].style.backgroundColor = 'orange';
}
createSquares();

function createTable() {
	const tableLine = document.querySelectorAll('tr');
	for (let linha = 0; linha < 5; linha += 1) {
		for (let coluna = 0; coluna < 5; coluna += 1) {
			const elementsQ = document.createElement('td');
			elementsQ.classList.add('pixel');
		tableLine[linha].appendChild(elementsQ);
 }
}
}
createTable();

function blackColorSelection() {
  const elemento = document.querySelectorAll('.color');
  elemento[0].classList.add('selected');
}
blackColorSelection();


const palette = document.querySelector('#color-palette');

function removeSelected() {
	let select = document.querySelector('.selected');
	/* while (select) { */
		select.classList.remove('selected');
		/* select = document.querySelector('.selected'); */
	/* } */
}

function clickColor() {
		palette.addEventListener('click', function(event) {
			removeSelected();
			event.target.classList.add('selected');
			})
}
clickColor();

const tabela = document.querySelector('#pixel-board');
function addColor() {
	tabela.addEventListener('click', function(event) {
		let select = document.querySelector('.selected');
		event.target.style.backgroundColor = select.style.backgroundColor;
	})
}
addColor();

const button = document.querySelector('#clear-board');

function benjaminButton() {
	button.addEventListener('click', function() {
		const tableElements = document.querySelectorAll('.pixel');
		for (let index = 0; index < tableElements.length; index += 1) {
				tableElements[index].style.backgroundColor = 'white';
			}
	})
}
benjaminButton();

const vqv = document.querySelector('#generate-board');
const inputTable = document.querySelector('#board-size');

function newTable() {
	const quadro = document.querySelectorAll('#pixel-board');
		for (let linha = 1; linha <= inputTable.valueAsNumber; linha += 1) {
			let newLine = document.createElement('tr');
			newLine.classList.add('remove');
			quadro[0].appendChild(newLine);
			for (let coluna = 1; coluna <= inputTable.valueAsNumber; coluna += 1) {
				let newColumn = document.createElement('td');
				newColumn.classList.add('pixel');
				newLine.appendChild(newColumn);
			}
		}
}

function removeOldBoard() {
	const oldBoard = document.querySelector('tbody');
	const newBoard = document.querySelectorAll('.remove');
	if (oldBoard) {
		oldBoard.remove();
	} else if (newBoard) {
		for (let index = 0; index < newBoard.length; index += 1) {
		 newBoard[index].remove();
		}
	}
}

function incrementTable() {
	vqv.addEventListener('click', function() {
		removeOldBoard();
		/* if (inputTable.valueAsNumber = '') { */
			/* alert('Board inválido!') */
		/* } else { */
			newTable();
		/* } */
	})
}
incrementTable();
