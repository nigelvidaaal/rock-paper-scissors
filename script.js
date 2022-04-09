const game = () => {
    let pScore = 0;
    let cScore = 0;
    //Play match
    const playMatch = () => {
        const buttons = document.querySelectorAll('.buttons button');
        const  playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector('.computer-hand');

        //Computer options 
        const computerOptions = ['rock', 'paper', 'scissors'];

        buttons.forEach(Option => {
            Option.addEventListener('click', function() {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber];
                //Here is what we call compare hands
                compareHands(this.textContent, computerChoice);
                //Update images
                playerHand.src = `images/${this.textContent}.png`;
                computerHand.src = `./images/${computerChoice}.png`;
            });
        });
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update text
        const winner = document.querySelector('.winner')
        if(playerChoice === computerChoice) {
            winner.textContent = 'It\'s a tie';
            return;
        }
        //Check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                return;
            } else {
                winner.textContent = 'Computer Wins'; 
                return;
            }
        }
        //Check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer wins';
                return;
            } else {
                winner.textContent = 'Player Wins'; 
                return;
            }
        }
        //Check for scissors 
        if(playerChoice === 'scissors'){
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer wins';
                return;
            } else {
                winner.textContent = 'Player Wins'; 
                return;
            };
        };
    };


    playMatch();
};

game();

