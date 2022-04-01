const pc = ["rock", "paper", "scissor"];
let scoreUser = 0;
let scorePc = 0;

function rock () {
    const answerPc= pc[Math.floor(Math.random()*3)];
    
    pcAnswer.innerHTML= "pc answer:";
    pcAnswer.innerHTML= `pc answer: <span class="pc-answer">${answerPc}</span>`;
    
    console.log(`pc answer: ${answerPc}`);
    if(answerPc=="rock"){
        console.log("none win");
    } else if(answerPc == "paper"){
        console.log("you lose");
        scorePc++
        score();
    } else if (answerPc == "scissor"){
        console.log("you win");
        scoreUser++
        score();
    };
};

function paper () {
    const answerPc= pc[Math.floor(Math.random()*3)];

    pcAnswer.innerText+= "pc answer:";
    pcAnswer.innerHTML= `pc answer: <span class="pc-answer">${answerPc}</span>`;

    console.log(`pc answer: ${answerPc}`);
    if(answerPc=="rock"){
        console.log("you win");
        scoreUser++
        score();
    } else if(answerPc == "paper"){
        console.log("none win");
    } else if (answerPc == "scissor"){
        console.log("you lose");
        scorePc++
        score();
    }
};

function scissor () {
    const answerPc= pc[Math.floor(Math.random()*3)];

    pcAnswer.innerText+= "pc answer:";
    pcAnswer.innerHTML= `pc answer: <span class="pc-answer">${answerPc}</span>`;
    
    console.log(`pc answer: ${answerPc}`);
    if(answerPc=="rock"){
        console.log("you lose");
        scorePc++
        score();
    } else if(answerPc == "paper"){
        console.log("you win");
        scoreUser++
        score();
    } else if (answerPc == "scissor"){
        console.log("none win")
    }
}

const userWin = document.createElement("span");
const pcWin = document.createElement("span");
const printUser = document.querySelector(".user");
const printPc = document.querySelector(".pc");
const pcAnswer = document.querySelector(".answer");

function score (){
    userWin.innerText = scoreUser;
    pcWin.innerText = scorePc;
    printPc.appendChild(pcWin);
    printUser.appendChild(userWin);

    
}
