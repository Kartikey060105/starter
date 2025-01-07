'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent =10;

document.querySelector('.guess').value = 23; 
console.log(document.querySelector('.guess').value);
*/

const generateRandomNum = () => Math.trunc(Math.random() * 20) + 1;
let randomNum = generateRandomNum();
let score = 20;
document.querySelector('.number').textContent = '?';

function firstEventListener() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    console.log(
      (document.querySelector('.message').textContent = 'No Number 😠')
    );
    document.querySelector('.score').textContent = --score;
  } else if (guess === randomNum) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = randomNum;
  } else if (guess > randomNum) {
    if (score >= 1) {
      document.querySelector('.message').textContent = '❌ Too High ';
      document.querySelector('.score').textContent = --score;
    } else {
      document.querySelector('.message').textContent = '😢 You lost the game';
    }
  } else if (guess < randomNum) {
    document.querySelector('.message').textContent = '❌ Too Low ';
    document.querySelector('.score').textContent = --score;
  }
}

document.querySelector('.check').addEventListener('click', firstEventListener);

document.querySelector('.again').addEventListener('click', function () {
    randomNum = generateRandomNum();
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';

  // firstEventListener();
});
