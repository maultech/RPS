let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;

function getComputerChoice(){
    const compChoice = Math.floor(Math.random() * 3 + 1);
    console.log('Computer choice: '+ compChoice);
    return compChoice;
}

function getHumanChoice(){
    const userChoice = prompt('Enter your choice of Rock, Paper or Scissors:');
    userChoice.toLowerCase;
    console.log('User choice ' + userChoice);
    return userChoice;
}


function playRound(computer, user){
    roundNumber++;
    console.log('Computer: ' + computer + ', User: ' + user);
    if (computer === 1 && user === 'scissors' || computer === 2 && user === 'rock'){
        console.log(`Sorry, you lose round #: ${roundNumber}`);
        computerScore += 1;
        console.log('computerScore is ' + computerScore +', humanScore is ' + humanScore);
    } else if (computer === 1 && user === 'paper' || computer === 2 && user === 'scissors'){
        console.log(`Yay, you win round #: ${roundNumber}!`);
        humanScore += 1;
    } else if (computer === 3 && user === 'paper'){
        console.log(`Sorry, you lose round #: ${roundNumber}`);
        computerScore += 1;
        console.log('computerScore is ' + computerScore + ', humanScore is ' + humanScore);
    } else if (computer === 3 && user === 'rock'){
        console.log(`Yay, you win round #: ${roundNumber}, rock breaks scissors!`);
        humanScore += 1;
    } else if (computer === user){
        console.log(`Game is tied at round #: ${roundNumber}!`);
    }
    return humanScore, computerScore;
}

function playGame(){
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
    playRound(getComputerChoice(), getHumanChoice());
}

function tallyGames(){
    let win = '';
    if (human > computer){
        win = 'Computer is toast! Congrats!';
    } else if (human < computer){
        win = 'Computer beat you!';
    } else if (human === computer){
        win = 'Total game score is tied';
    }
}

playGame(playRound());
tallyGames();