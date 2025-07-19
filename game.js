let userScore = 0;
let compScore = 0;
const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
    const options = ["rock", "paper","scissors"];
    const randomIndex = Math.floor( Math.random()*3 )
    return options[randomIndex];
}

const showWinner = (UserWin,userChoice,compChoice) => {
    if(UserWin){
        userScore++;
        userScorePara.innerHTML = userScore;
        msg.innerHTML = "🏆 Congratulations, you're officially smarter than random code!";
    }
    else{
        compScore++;
        compScorePara.innerHTML = compScore;
        msg.innerHTML = "👎 You lost to a machine that doesn’t even have hands.";
    }
}


const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        msg.innerHTML = "😐 Nobody won. Nobody lost.Just two legends throwing the same hand sign.";
    } else{
        let UserWin = true;
        if(userChoice === "rock"){
           UserWin =  compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            UserWin = compChoice === "scissors" ? false : true;
        } else{
            UserWin = compChoice === "rock" ? false : true;
        }

        showWinner(UserWin,userChoice,compChoice);
    }
};

        


Array.from(choices).forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});