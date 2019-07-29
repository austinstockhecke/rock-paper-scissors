const gameChoice = ["rock","paper","scissors"];
var gamesPlayed = 0; 
var compWin = 0;
var playWin = 0;
var tie = 0;



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        game(button.id, computerChoice(gameChoice));
    });
});

const elem = document.getElementById("results");
const content = document.createElement("div");
content.setAttribute('style', 'white-space: pre;');

const numTies = document.getElementById("ties");
const tContent = document.createElement("span");

const numPWins = document.getElementById("player-win");
const pContent = document.createElement("span");

const numCWins = document.getElementById("comp-win");
const cContent = document.createElement("span");





function computerChoice(array) {
    var r = Math.floor(Math.random() * Math.floor(3));
    return array[r];
}
function playRound(playerSelect, computerSelection) {
    ++gamesPlayed;
    if(computerSelection == playerSelect) {
        ++tie;
        tContent.textContent = " " + tie;
        numTies.appendChild(tContent);
        return "Computer chose " + computerSelection + " while you chose " + playerSelect + ": No points awarded" +  "\r\n";

    }
    if(computerSelection == "rock") {
        if(playerSelect == "scissors"){
            ++compWin;
            cContent.textContent = " " + compWin;
            numCWins.appendChild(cContent);
            return "Computer chose " + computerSelection + " while you chose " + playerSelect + ": You lose" +  "\r\n";
        }
        else{
            ++playWin;
            pContent.textContent = " " + playWin;
            numPWins.appendChild(pContent); 
            return"Computer chose " + computerSelection + " while you chose " + playerSelect + ": You win" +  "\r\n";
        }
    }
    if(computerSelection == "scissors") {
        if(playerSelect == "paper") {
            ++compWin;
            cContent.textContent = " " + compWin;
            numCWins.appendChild(cContent);
            return "Computer chose " + computerSelection + " while you chose " + playerSelect + ": You lose" +  "\r\n";
        }
        else {
            ++playWin;
            pContent.textContent = " " + playWin;
            numPWins.appendChild(pContent);
            return "Computer chose " + computerSelection + " while you chose " + playerSelect + ": You win" +  "\r\n";
        }
    }
    if(computerSelection == "paper") {
        if(playerSelect == "rock") {
            ++compWin;
            cContent.textContent = " " + compWin;
            numCWins.appendChild(cContent);
            return "Computer chose " + computerSelection + " while you chose " + playerSelect + ": you lose" +  "\r\n";
        }
        else {
            ++playWin;
            pContent.textContent = " " + playWin;
            numPWins.appendChild(pContent);
            return "Computer chose " + computerSelection + " while you chose " + playerSelect + ": you win" + "\r\n";


        }
    }
    
}


function game(playerChoice, computerChoice){
    if(gamesPlayed == 4) {
        content.textContent += playRound(playerChoice,computerChoice);
        if(playWin > compWin) {
            content.textContent += "You won " + playWin + " games out of 5" + " with " + tie + " tie(s) \r\n";
         }
         else if(compWin > playWin) {
            content.textContent += "Computer won " + compWin + " games out of 5" + " with " + tie + " ties \r\n";
         }
         else {
            content.textContent += "It's a tie!\r\n";
         }  
         elem.appendChild(content);  
         
         return;
    }
    else if (gamesPlayed > 4) {
        return;
    }
    content.textContent += playRound(playerChoice, computerChoice);
    elem.appendChild(content);
    return 

    }

/*
while (gamesPlayed != 5) {
    elem.innerHTML += game() + "<br />";
}

if(playWin > compWin) {
   elem.innerHTML += "You won " + playWin + " games out of 5";
}
else if(compWin > playWin) {
   elem.innerHTML += "Computer won " + compWin + " games out of 5";
}
else {
    elem.innerHTML += "It's a tie!.";
}    
*/