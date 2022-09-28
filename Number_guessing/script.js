'use strict';

/*document.querySelector('.message').textContent = "correct guess";
document.querySelector('.guess').value = 23;*/

let secretnumber = Math.trunc(Math.random()*20 + 1);
let score = 20;
const checkbtn = document.querySelector('.check');
let highscore = 0;
const getmessg = function(message){
    document.querySelector('.message').textContent = message;
}
checkbtn.addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
//const message = document.querySelector('.message');
     
    if(!guess){
        getmessg('No number inputed');
    }
    let getscore = document.querySelector('.score');
    //when player win
    if(guess == secretnumber){
        getmessg("congratulations you got the answer correct");
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if(score > highscore)
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
        
    }
    //guess is less or high
    else if (guess !== secretnumber){
        if (score > 1){
            getmessg(guess > secretnumber ? 'number is high' : "number is low");
            score--;
            getscore.textContent = score;
            }
            else{
                getmessg("game Over!!");
                score = 0;
                getscore.textContent = score;
                document.querySelector('body').style.backgroundColor = 'red';
            }
    }
    
})
const again = document.querySelector('.again');
again.addEventListener('click', ()=>{
secretnumber = Math.trunc(Math.random()*20 + 1);
document.querySelector('.number').textContent = '?';
score = 20;
document.querySelector('.score').textContent = score;
getmessg('start guessing...');
document.querySelector('.guess') .value = '';
document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem'
})

