'use strict';

const gameButton = document.querySelector('.game__area');
const activePlayerElm = document.querySelector('.player--active');

let jeNaTahu = 'circle';

gameButton.addEventListener('click', (event) => {
  const pressedButton = event.target;

  if (
    pressedButton.classList.contains('game__area--circle') ||
    pressedButton.classList.contains('game__area--cross')
  ) {
    alert('Select an empty field');
  } else if (jeNaTahu === 'circle') {
    pressedButton.classList.add('game__area--circle');
    activePlayerElm.src = 'images/cross.svg';
    jeNaTahu = 'cross';
  } else {
    pressedButton.classList.add('game__area--cross');
    activePlayerElm.src = 'images/circle.svg';
    jeNaTahu = 'circle';
  }
});
