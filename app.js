/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, activePlayer,gamePlaying;

init();


document.querySelector(".btn-roll").addEventListener("click",function(){
    if(gamePlaying){

    // 1. roll the dice
    var dice = Math.floor(Math.random()*6) + 1

    // 2.show the result
    var diceDM = document.querySelector(".dice");
    diceDM.style.display = 'block';
    diceDM.src = "dice-" + dice + ".png"

    // 3. Update total score if dice is not one

    if (dice !== 1 ){
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
        
    } else {
        nextPlayer();
    }

    }
    
});
// Update the global score and change to next player when hold button 
document.querySelector('.btn-hold').addEventListener('click',function(){
    scores[activePlayer] += roundScore;
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    var user_score = document.querySelector(".final-score").value;
    var winningScore;
    if(user_score){
     winningScore = user_score;
    } else {
     winningScore = 100;
    }
    
    if (scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent ="Winner";
        gamePlaying=false;
      
    }
    nextPlayer();
});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0 ;
    roundScore = 0;
    document.getElementById("current-0").textContent = 0 ;
    document.getElementById("current-1").textContent = 0 ;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    document.querySelector(".dice").style.display = "none";

        

};

document.querySelector(".btn-new").addEventListener('click' , init);

function init(){
scores =[0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
//Initial values
document.getElementById('score-0').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-1').textContent = "0";
document.querySelector(".dice").style.display = 'none';
document.querySelector("#name-0").textContent = "Player 1"
document.querySelector("#name-1").textContent = "Player 2"


document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");
document.querySelector(".player-0-panel").classList.add("active");

};