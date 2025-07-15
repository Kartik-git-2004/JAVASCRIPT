let date = new Date();
// console.log(date); // simple date function but it is not readable .
// console.log(date.toString());// this is bit readable 
// // we have more function , lets try 
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toJSON())
// console.log(date.toLocaleString())


// if i want to creat my own date with my format 
// let createdDate = new Date(2025,6,14 ,13,20);
let createdDate = new Date("7-14-2025");// mm-dd-yyyy

console.log(createdDate.toLocaleString());

// TimeStamp

let timestamp = Date.now();
// console.log(timestamp);
// console.log(createdDate.getTime());//converting date into time , so that we can compare time easily .
// console.log(Math.floor((Date.now())/1000)); // converting it into second


console.log(date.getDate());
console.log(date.getDay());
console.log(date.getMonth()+1);
console.log(date.getTime());




