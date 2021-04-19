'use strict';

const jeNaTahu = 'circle';

const gameButton = document.querySelector('.game__area');

gameButton.addEventListener('click', (event) => {
  const pressedButton = event.target;
  if (jeNaTahu === 'circle') {
    pressedButton.classList.add('game__area--circle');
  } else pressedButton.classList.add('game__area--cross');
});

const activePlayerElm = document.querySelector('.player--active');
