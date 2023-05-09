const rock = 'img/blrock.png';
const paper = 'img/blpaper.png';
const scissors = 'img/blscissors.png';
let yourScore = 0;
let compScore = 0; 
const choices = [rock, paper, scissors]; 


const choicesimages = document.getElementsByClassName('image'); 
const chosenrock = document.getElementById('rock');
const chosenpaper = document.getElementById('paper');
const chosenscissor = document.getElementById('scissors'); 
const choicesimagesComp = document.querySelector('#computer-answer'); 
const _resPanel = document.querySelector('.result'); 
const result_of_match = document.querySelector('#text-result'); 
const _yourScore = document.querySelector('.playerscore'); 
const _compScore = document.querySelector('.computerscore'); 
const newgame = document.querySelector('.btn-newgame');




init();


chosenrock.addEventListener('click', function(){
    getCompChoice();
    gamePlay('ROCK'); 
});

chosenpaper.addEventListener('click', function(){
    getCompChoice();
    gamePlay('PAPER'); 
});

chosenscissor.addEventListener('click', function(){
    getCompChoice();
    gamePlay('SCISSOR'); 
});



newgame.addEventListener('click', init); 

function init(){
    choicesimagesComp.style.display = 'none';
    _resPanel.style.visibility = 'hidden';  
    yourScore = 0;
    compScore = 0; 
    _yourScore.textContent = '0'; 
    _compScore.textContent = '0'; 
}


function getCompChoice(){
    choicesimagesComp.style.display = 'inline-block'; 
    const randNum = Math.floor(Math.random() * 3); 
    const choices_short = ['ROCK', 'PAPER', 'SCISSOR']; 
    choicesimagesComp.src = choices[randNum];
    return choices_short[randNum]; 
}

function gamePlay(choice){
    const compChoice = getCompChoice();
    switch (choice + compChoice){
        case 'ROCKPAPER':
        case 'PAPERSCISSOR':
        case 'SCISSORROCK':
            losing();
            break;

        case 'ROCKSCISSOR':
        case 'PAPERROCK':
        case 'SCISSORPAPER':
            winning();
            break; 

        default:
            _resPanel.style.display = 'block'; 
            result_of_match.textContent = 'DRAW!'; 
            
    }

}

function losing(){
    _resPanel.style.visibility = 'visible'; 
    result_of_match.textContent = 'you loose!'; 
    compScore ++;
    _compScore.textContent = compScore; 
}

function winning(){
    _resPanel.style.visibility = 'visible'; 
    result_of_match.textContent = 'you win!'; 
    yourScore++;
    _yourScore.textContent = yourScore; 
}


