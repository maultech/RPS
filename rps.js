function getComputerChoice(){
    const compChoice = Math.floor(Math.random() * 3 + 1);
    console.log('Computer choice: '+ compChoice);
    return compChoice;
}

function getHumanChoice(){
    const userChoice = parseInt(prompt('1, 2 or 3 for rock, paper or scissors?'));
    console.log('User choice ' + userChoice);
    return userChoice;
}


function calculateWinLoss(computer, user){
    console.log('Computer: ' + computer + ', User:' + user);
    if (computer === 1 && user === 3 || computer === 2 && user === 1){
        console.log('Sorry, you lose');
    } else if (computer === 1 && user === 2 || computer === 2 && user === 3){
        console.log('Yay, you win!');
    } else if (computer === 3 && user === 2){
        console.log('Sorry, you lose');
    } else if (computer === 3 && user === 1){
        console.log('Yay, you win, rock breaks scissors!');
    } else console.log('Game is tied!');
}

calculateWinLoss(getComputerChoice(), getHumanChoice());