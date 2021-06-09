let rating = 3;
if (rating === 3) {
    console.log("you are correct")
}

console.log("before condtion")
if (1 + 1 === 3) {
    console.log("math still work!!")
}
console.log("After condition")


// ramdom
let rand = Math.random();
if (rand < 0.5) {
    console.log("your number is less than 0.5")
    console.log(rand);

}

let rand1 = Math.random();

if (rand1 >= 0.5) {
    console.log("your number is less than 0.5")
    console.log(rand1);

}

Else - If
let covidCase = 21000;
if (covidCase < 500) {
    console.log("The cases on monday are less")
}
else if (covidCase < 20000) {
    console.log("Tuesday cases were on average")
}
else if (covidCase < 30000) {
    console.log("It's too high")
}

Else
var phrase = "black";
function getcolor(phrase) {
    if (phrase == "stop") {
        console.log("red");
    }
    else if (phrase == "slow") {
        console.log("yellow");
    }
    else if (phrase == "go") {
        console.log("green");
    }
    else {
        console.log("purple");
    }
} getcolor(phrase);

// Nesting 
const password = prompt("please enter a password");
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log("valid")
    } else {
        console.log("its incorrect")
    }
}
else {
    console.log("It's not too long")
}




