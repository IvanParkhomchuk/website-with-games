function calc() {
  var action = document.getElementById("verbList").value;

  var firstNumber = parseFloat(document.getElementById("number1").value);
  var secondNumber = parseFloat(document.getElementById("number2").value);

  if (action == "+") {
      var answer = firstNumber + secondNumber;
  } else if (action == "-") {
      var answer = firstNumber - secondNumber;
  } else if (action == "*") {
      var answer = firstNumber * secondNumber;
  } else if (action == "/") {
      var answer = firstNumber / secondNumber;
  }

  document.getElementById("calc-answer").value = answer;

}





var randNum = Math.round(Math.random() * 100);
var attempts = 7;

function guessTheNumber() {
    var userAnswer = document.getElementById("userAnswer").value;



    if (userAnswer == randNum) {
        document.getElementById("biggerSmaller").value = "You are win!";
    } else if (userAnswer > randNum) {
        document.getElementById("biggerSmaller").value = "Random number is smaller";
        attempts = attempts - 1;
        document.getElementById("attempts").value = "You have " + attempts + " attempts";
    } else if (userAnswer < randNum) {
        document.getElementById("biggerSmaller").value = "Random number is bigger";
        attempts = attempts - 1;
        document.getElementById("attempts").value = "You have " + attempts + " attempts";
    } else {
        document.getElementById("biggerSmaller").value = "Error :0";
    }

    if (attempts == 0) {
        alert("You lose :(. the random number was " + randNum);
        alert("The page will be reloaded");
        location.reload();
    }

}





function rockPaperScissors() {

  var userTurn = document.getElementById("rps-user").value;

  var computerTurn = Math.round(Math.random() * 2);

  if (computerTurn == 0) {
      var computerAnswer = "rock";
  } else if (computerTurn == 1) {
      var computerAnswer = "paper";
  } else {
      var computerAnswer = "scissors";
  }

  if (userTurn == computerAnswer) {
      document.getElementById('user-turn').textContent = "Your turn: " + userTurn;
      document.getElementById('computer-turn').textContent = "Computer turn: " + computerAnswer;
      document.getElementById('result').textContent = "TIE";
  } else if ((userTurn == "rock" && computerAnswer == "scissors") || (userTurn == "scissors" && computerAnswer == "paper") || (userTurn == "paper" && computerAnswer == "rock")) {
      document.getElementById('user-turn').textContent = "Your turn: " + userTurn;
      document.getElementById('computer-turn').textContent = "Computer turn: " + computerAnswer;
      document.getElementById('result').textContent = "you win";
  } else {
      document.getElementById('user-turn').textContent = "Your turn: " + userTurn;
      document.getElementById('computer-turn').textContent = "Computer turn: " + computerAnswer;
      document.getElementById('result').textContent = "you lose";
  }
}