let str = " Genpact "
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.trim())
console.log(str.blink());   // <blink>Hello, world</blink>
console.log(str.bold());    // <b>Hello, world</b>
console.log(str.italics()); // <i>Hello, world</i>
console.log(str.strike());  // <strike>Hel
console.log(str.charAt(3))
let newstr1 = str.replace(/Genpact/i, 'vaishnavi')
console.log(newstr1)
console.log(str.indexOf('t'))

let str1 = 'Twas the night before Xmas...';
let newstr = str1.replace(/xmas/i, 'Christmas');
console.log(newstr);

let product = "1+phone";
let price = 250000;
let qty = 3;
let color = "black";
console.log(`He brought phone with a price of ${price} and ${color} ,it is ${product} `)
