const choices = document.querySelectorAll(".choice")
const score = document.querySelector("#score")
const result = document.getElementById("result")
const restart = document.getElementById("restart")
const modal = document.querySelector(".modal")
const scoreboard = {
    player:0,
    computer:0
}


function play(e){
    restart.style.display = "inline-block"
    const playerChoice = e.target.id
    const computerChoice = getComputerChoice()
    const winner = getWinner(playerChoice,computerChoice);
    showWinner(winner,computerChoice)
}

function getWinner(p,c){
    if(p==c){
        return 'draw';
    }else if(p=="rock"){
        if(c=="paper"){
            return 'computer'
        }else{
            return "player"
        }
    }else if(p=="paper"){
        if(c=="scissors"){
            return "computer"
        }else{
            return "player"
        }
    }else if(p=="scissors"){
        if(c=="rock"){
            return "computer"
        }else{
            return "player"
        }
    }
}

function getComputerChoice(){
    const randomNumber = Math.random();
    if(randomNumber<=0.23){
        return "rock"
    }else if(randomNumber>=0.89){
        return "paper"
    }else
    return "scissors";
}

function showWinner(winner,computerChoice){
    if(winner == "player"){
        scoreboard.player++;
        result.innerHTML = `
        <h1 class='text-win'> you Win</h1>
        <i class='fas fa-hand-${computerChoice} fa-10x'></i>
        `
        
    }
    else if(winner == "computer"){
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class='text-lose'> you lose</h1>
        <i class='fas fa-hand-${computerChoice} fa-10x'></i>
        `
}else{
    result.innerHTML = `
        <h1 class='text-lose'> it's a draw</h1>
        <i class='fas fa-hand-${computerChoice} fa-10x'></i>
         `
}
score.innerHTML = `
<p>player : ${scoreboard.player}</p>
<p>computer : ${scoreboard.computer}</p>
 `

 modal.style.display = "block"
}

function clearModal(e){
 if(e.target==modal){
     modal.style.display = "none"
 }
}

function restartGame(){
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML =`
    player : 0;
    Computer : 0;
    `
}

//event Listener
choices.forEach(function(choice){
choice.addEventListener("click",play)
})  
window.addEventListener("click",clearModal)
restart.addEventListener("click",restartGame)