
let validInput = false;
let maxNum, input;


while(!validInput) {
    //following script allows for user to input a maximum number value for the game
   
    input = window.prompt('What should the maximum value be? If a decimal value is entered, it will be rounded to the nearest integer');
    maxNum = Number(input)

    if (maxNum != NaN && maxNum > 0 && maxNum % 1 === 0) {
        validInput = true;
        }
    else if (maxNum != NaN && maxNum > 0) {maxNum = Math.round(maxNum); validInput = true;
    }

    let maxNumMessage = document.getElementById('maxNumMessage')
    maxNumMessage.innerHTML = `Guess a number between <strong> 1 and ${maxNum}<strong>.`

    //following script generates a random number that the user has to guess

    let answer = Number(Math.floor((Math.random()* maxNum) + 1));   
    function printNumber() {
        let message = document.getElementById('message');
     
        let guess = Number(document.getElementById('guess').value)
        
        //following script is for response messages when user inputs a guess

        if (guess < 1 || guess > maxNum) {
            message.innerHTML = 'That number is not in range, try again.';
        }
        else if(answer > guess){
            message.innerHTML = 'No, try a higher number';
        }
        else if(answer < guess){
            message.innerHTML = 'No, try a lower number';
        }
        
        else if(answer === guess){
            message.innerHTML = `You got it! It took you ${trackGuess.length + 1} tries and your guesses were ${trackGuess},${answer}.`;
        }
        // Winning message, shows all guesses and total number of guesses
        else { 
            message.innerHTML = 'That is not a number!';
        }
        
        //following console.log code not necessary for game, just so I can keep track of maxNum and answer variables
        console.log(maxNum)
        console.log(answer)
        }

    let trackGuess = []
   
    //following function for storing new guesses in an array and checking for duplicate guesses
    function storeGuess() {

       if (trackGuess.includes(guess.value)) {message.innerHTML = 'You have already guessed that number, try again!'}
       else if(guess.value >= 1 && guess.value < maxNum) {
        trackGuess.push((guess.value))
        console.log(trackGuess)
       }
     }
}

 
