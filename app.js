

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");

let yourScore = 0;
let compScore = 0; 
const choices = [rock, paper, scissors];

const result = document.querySelector(".result");

init();


rock.addEventListener('click', function(){
    getCompChoice();
    gamePlay('rockchoice'); 
});

paper.addEventListener('click', function(){
    getCompChoice();
    gamePlay('paperchoice'); 
});

scissor.addEventListener('click', function(){
    getCompChoice();
    gamePlay('scissorchoice'); 
});

_btnNew.addEventListener('click', init); 

function init(){
    _imgComp.style.display = 'none';
    _resPanel.style.visibility = 'hidden';  
    yourScore = 0;
    compScore = 0; 
    _yourScore.textContent = '0'; 
    _compScore.textContent = '0'; 
}

function getCompChoice(){
    _imgComp.style.display = 'inline-block'; 
    const randNum = Math.floor(Math.random() * 3); 
    const choices_short = ['rockchoice', 'paperchoice', 'scissorchoice']; 
    _imgComp.src = choices[randNum];
    return choices_short[randNum]; 
}

function gamePlay(choice){
    const compChoice = getCompChoice();
    switch (choice + compChoice){
        case 'rockchoicepaperchoice':
        case 'paperchoicescissorchoice':
        case 'scissorchoicerockchoice':
            losing();
            break;

        case 'rockchoicescissorchoice':
        case 'paperchoicerockchoice':
        case 'scissorchoicepaperchoice':
            winning();
            break; 

        default:
            _resPanel.style.display = 'block'; 
            _resText.textContent = 'Tie!'; 
            
    }
}

function losing(){
    _resPanel.style.visibility = 'visible'; 
    _resText.textContent = 'you loose!'; 
    compScore ++;
    _compScore.textContent = compScore; 
}

function winning(){
    _resPanel.style.visibility = 'visible'; 
    _resText.textContent = 'you win!'; 
    yourScore++;
    _yourScore.textContent = yourScore; 
}