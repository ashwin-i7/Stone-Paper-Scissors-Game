let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msgShow = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


const drawGame = () => {
    console.log("game was draw");
    msgShow.innerText = "Game draw | Play again";
     msgShow.style.backgroundColor = "#081b31";
}  ;

const showWinner = (userWin) => {
    if(userWin){
        userScore ++;
        userScorePara.innerText = userScore;
        console.log("you win!");
        msgShow.innerText = "You win!";
        msgShow.style.backgroundColor = "green";
    
    }else{
        compScore ++;
        compScorePara.innerText = compScore;
        console.log("you lose");
        msgShow.innerText= "You lose";
        msgShow.style.backgroundColor = "red";
    }
};


const genCompChoice = () => {
    const option = ["Rock", "Paper", "Scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const playGame = (userChoice) => {
console.log("user choice " , userChoice);
// generate computer choice
const compChoice = genCompChoice();
console.log("comp choice ", compChoice);

if(userChoice === compChoice){
    drawGame();
}else{
    let userWin = true;
    if(userChoice === "Rock"){
        userWin = compChoice === "Paper" ? false : true;
    }else if (userChoice === "Paper"){
        userWin = compChoice === "Scissor" ? false :true;
    }else{
        userWin = compChoice === "Rock" ? false :true;
    }
    showWinner (userWin);
}
};

choices.forEach((choice)=>{
choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
})
});


