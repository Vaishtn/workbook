let maximum = parseInt(prompt("Enter the max number"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number"));

}



const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempt = 1;
let guess = perseInt(prompt("enter your first guess!"));
while (parseInt(guess !== targetNum)) {
    if (guess == 'q') break;
    attempt++;
    if (guess > targetNum) {
        guess = prompt("Too high! Enter a new guess:");
    } else {
        guess = prompt("too low! Enter a new guess:");

    }
    if (guess === 'q') {
        console.log("ok , you quit")
    } else {
        console.log("congrats you win")
        console.log(`you got it! It took you ${attempt} guesses`)
    }
}
console.log(`You got it!! ${attempt}guess`)