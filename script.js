'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

const number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent =
      'No number has been inputted';
  } else if (guess === number) {
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.message').textContent =
      'you have guessed correctly';

    document.querySelector('.number').textContent = number;

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      score = highScore;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > 20) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'your number is over 20, please guess again';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you have lost';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess !== number) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > number ? 'too high' : 'too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you have lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  const number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = number;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.message').textContent = 'Start Guessing...';

  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#36096d';

  document.querySelector('.number').style.width = '15rem';
});
