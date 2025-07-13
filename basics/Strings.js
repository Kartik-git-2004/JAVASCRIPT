const namer= 'kartik';
console.log(namer)
console.log(namer[1]) // String works as key value in java script .--> here 1 is key and a is value .

//  Similarly in other languages it has so many string functions  like length , toUpperCase etc
 const getName = new String(`My name is ${namer} . And I live in jammu `);

//  console.log(getName.__proto__);

// trim -- remove leading and trailing whitespaces
const tt = `   kartik  `;
console.log(tt);
console.log(tt.trim())

// includes

console.log(tt.includes(`kar`));