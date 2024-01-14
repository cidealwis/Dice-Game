let player1TotalMarks = 0;
let player2TotalMarks = 0;
let rollCount = 0;

function startGame() {
  if (rollCount < 10) {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    let randomImage1 = "images/dice" + randomNumber1 + ".png";
    let randomImage2 = "images/dice" + randomNumber2 + ".png";

    let image1 = document.getElementById("player1Image");
    image1.setAttribute("src", randomImage1);

    let image2 = document.getElementById("player2Image");
    image2.setAttribute("src", randomImage2);

    player1TotalMarks += randomNumber1;
    player2TotalMarks += randomNumber2;

    rollCount++;

    if (rollCount === 10) {
      document.querySelector(".winnerResult").innerHTML = `Player 1 Total Marks: ${player1TotalMarks} | Player 2 Total Marks: ${player2TotalMarks}<br>`;
      document.querySelector(".winnerResult").innerHTML += determineWinner();
      document.querySelector(".playAgain button").textContent = "Start New Game";
    }
  } else {
    // Reset for a new game
    player1TotalMarks = 0;
    player2TotalMarks = 0;
    rollCount = 0;
    document.querySelector(".winnerResult").textContent = "Click 'Roll' to play!";
    document.querySelector(".playAgain button").textContent = "Roll";
  }
}

function determineWinner() {
  if (player1TotalMarks > player2TotalMarks) {
    return '😎 Player 1 is the Winner!';
  } else if (player2TotalMarks > player1TotalMarks) {
    return '🤓 Player 2 is the Winner!';
  } else {
    return '😍 It\'s a Draw!';
  }
}
