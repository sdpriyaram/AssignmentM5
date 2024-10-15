const choices = ['rock','paper','scissors'];
function getComputerchoice()
{
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function getUserchoice()
{
    let uChoice;
    do
    {
        uChoice = prompt("Enter rock, paper or scissors: ");
        if (uChoice != null)
           uChoice = uChoice.toLowerCase();
        else
           break;
    }
    while (choices.indexOf(uChoice) < 0);
    return uChoice;
}

function determineWinner(uChoice,cChoice)
{
    let winner = "0";
    if (choices.indexOf(uChoice) >=0)
        {
            let cChoice = getComputerchoice();
            if (uChoice == 'rock')
                if( cChoice == 'rock')
                    winner = "Tie";
                else if (cChoice == 'paper')
                    winner = "Computer";
                else
                    winner = "User"
            else if (uChoice == 'paper')
                if( cChoice == 'rock')
                    winner = "User";
                else if (cChoice == 'paper')
                    winner = "Tie";
                else
                    winner = "Computer"
            else
                if( cChoice == 'rock')
                    winner = "Computer";
                else if (cChoice == 'paper')
                    winner = "User";
                else
                    winner = "Tie"
        }
    return winner;
}
function main()
{
    let cChoice = getComputerchoice();
    let uChoice = getUserchoice();
    let result = determineWinner(uChoice,cChoice);
    if (result != "0")
    {
        if (result == 'Tie')
            alert("Game is a tie");
        else
            alert(`Winner is ${result}`);
    }
}

main();
