// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// //Even number
// for (let i = 2; i <= 21; i += 2) {
//     console.log(i);
// }

// //odd number
// for (let i = 1; i <= 21; i += 2) {
//     console.log(i);
// }

// for (let i = 100; i >= 10; i -= 10) {
//     console.log(i);
// }

// for (let i = 10; i <= 10000; i *= 10) {
//     console.log(i);
// }

// const array = ['gadag', 'ron', 'koppal', 'bellary', 'hubli', 'dharwad']

// for (let i = 0; i < array.length; i++) {
//     console.log(i, array[i]);
// }

// for (let i = array.length - 1; i >= 0; i--) {
//     console.log(array[i])
// }

// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// // WRITE YOUR LOOP BELOW THIS LINE:
// for (let i = 0; i < people.length; i++) {
//     console.log(people[i].toUpperCase())
// }

//nested loop
// for (let i = 1; i < 10; i++) {
//     console.log(`i is ${i}`)
//     for (let j = 1; j < 4; j++) {
//         console.log(` j is: ${j}`)
//     }
// }

// const studentList = [['ram', 'sham', 'raghu', 'radha'],
// ['van', 'man', 'hary'], ['savi', 'abhi']
// ]

// for (let i = 0; i < studentList.length; i++) {
//     const row = studentList[i];
//     console.log(`roa #${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

//while loop
// const Secreat = "vaish"

// let guess = prompt("Enter the correct password!!");
// while (guess !== Secreat) {
//     guess = prompt("Enter the correct password!!");
// }
// console.log("ya it's valid")

//break keyword
let input = prompt("hello,say someting")

while (true) {
    input = prompt(input);
    if (input.toLowerCase() === "stop coping me") {
        break;
    }

}
console.log("ok u own")