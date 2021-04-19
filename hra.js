'use strict';

const gameButton = document.querySelector('.game__area');
const activePlayerElm = document.querySelector('.player--active');

let jeNaTahu = 'circle';

gameButton.addEventListener('click', (event) => {
  const pressedButton = event.target;

  if (jeNaTahu === 'circle') {
    pressedButton.classList.add('game__area--circle');
    pressedButton.disabled = true;
    activePlayerElm.src = 'images/cross.svg';
    jeNaTahu = 'cross';
  } else {
    pressedButton.classList.add('game__area--cross');
    pressedButton.disabled = true;
    activePlayerElm.src = 'images/circle.svg';
    jeNaTahu = 'circle';
  }
});
