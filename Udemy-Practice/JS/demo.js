for (let i = 0; i < 5; i++) {
    // functionscope
    console.log(i);
}
console.log(i + "outside");

for (var i = 0; i < 5; i++) {
    // blockscope
    console.log(i);
}
console.log(i + "outside");