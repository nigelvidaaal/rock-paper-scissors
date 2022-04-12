const game = () => {
    let pScore = 0;
    let cScore = 0;
    
    //Play Match
    const playMatch = () => {
      const buttons = document.querySelectorAll(".buttons button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand = document.querySelector(".computer-hand");
      const hands = document.querySelectorAll('.hands img');

      hands.forEach(hand => {
        hand.addEventListener('animationend', function(){
          this.style.animation='';
        });
      });

      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      buttons.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber = Math.floor(Math.random() * 3);
          const computerChoice = computerOptions[computerNumber];

          setTimeout(() => {
            //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);

          //Update Images
          playerHand.src = `./images/${this.textContent}.png`;
          computerHand.src = `./images/${computerChoice}.png`;
          }, 600)

          //Animation
          playerHand.style.animation = 'shakePlayer 0.7s ease';
          computerHand.style.animation = 'shakeComputer 0.7s ease';
        
        });
      });
    };

    const updateScore = () => {
      const playerScore = document.querySelector(".player1 p");
      const computerScore = document.querySelector(".computer1 p");
      playerScore.textContent = pScore;
      computerScore.textContent = cScore;
    };
  
    const compareHands = (playerChoice, computerChoice) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice) {
        winner.textContent = "It\'s a tie";
        return;
      };
      //Check for Rock
      if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
          winner.textContent = "rock negs scissors";
          pScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Don't Give up!";
          cScore++;
          updateScore();
          return;
        }
      };
      //Check for Paper
      if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          winner.textContent = "You can do it!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "Player > Computer";
          pScore++;
          updateScore();
          return;
        }
      };
      //Check for Scissors
      if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          winner.textContent = "Try again!";
          cScore++;
          updateScore();
          return;
        } else {
          winner.textContent = "W Player";
          pScore++;
          updateScore();
          return;
        };
      };
      compareHands();
    };

  
    //Is call all the inner function
    
    playMatch();
    ``};
  
  //start the game function
game();