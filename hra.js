'use strict';

const gameAreaElm = document.querySelector('.game__area');
const activePlayerElm = document.querySelector('.player--active');
let pressedButton = '';

// ------ vykreslenie buttonov javascriptom ------------//

for (let i = 0; i < 100; i++) {
  let policko = document.createElement('button');
  policko.classList.add('game__area--button');
  gameAreaElm.appendChild(policko);
}

// pro políčko s křížkem vrátí řetězec 'cross', pro kroužek 'circle' a pro neobsazené políčko hodnotu undefined

const getSymbol = (field) => {
  if (field.classList.contains('game__area--circle')) {
    return 'circle';
  } else if (field.classList.contains('game__area--cross')) {
    return 'cross';
  }
};

// funkce getField(row, column), pro číslo řádku a sloupce vrátí příslušný prvek.

const boardSize = 10;
const fields = document.querySelectorAll('.game__area--button');
const getField = (row, column) => fields[row * boardSize + column];

// funkce getPosition, která pro dané políčko vrátí objekt s číslem řádku a sloupce

const getPosition = (field) => {
  let fieldIndex = 0;
  while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
    fieldIndex++;
  }

  return {
    row: Math.floor(fieldIndex / boardSize),
    column: fieldIndex % boardSize,
  };
};

// Is Winning Move? ---------------------------------------------------------------//
const symbolsToWin = 5;
const isWinningMove = (field) => {
  const origin = getPosition(field);
  const symbol = getSymbol(field);

  let i;

  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = origin.column;
  while (i > 0 && symbol === getSymbol(getField(origin.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = origin.column;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(origin.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= symbolsToWin) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = origin.row;
  while (i > 0 && symbol === getSymbol(getField(i - 1, origin.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = origin.row;
  while (
    i < boardSize - 1 &&
    symbol === getSymbol(getField(i + 1, origin.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= symbolsToWin) {
    return true;
  }

  return false;
};

// ------ Hra dvoch hracov - pridavanie kolecek a krizikov ------------//
let jeNaTahu = 'circle';
gameAreaElm.addEventListener('click', (event) => {
  let pressedButton = event.target;

  if (jeNaTahu === 'circle') {
    pressedButton.classList.add('game__area--circle');
    pressedButton.disabled = true;
    activePlayerElm.src = 'images/cross.svg';
    jeNaTahu = 'cross';
    if (isWinningMove(pressedButton)) {
      setTimeout(function () {
        let message = confirm('Vyhrál kroužek. Spustit novou hru?');
        if (message) {
          location.reload();
        }
      }, 350);
    }
  } else {
    pressedButton.classList.add('game__area--cross');
    pressedButton.disabled = true;
    activePlayerElm.src = 'images/circle.svg';
    jeNaTahu = 'circle';
    if (isWinningMove(pressedButton)) {
      setTimeout(function () {
        let message = confirm('Vyhrál křížik. Spustit novou hru?');
        if (message) {
          location.reload();
        }
      }, 350);
    }
  }
});
