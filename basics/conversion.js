let a ="kartik";
console.log(typeof a); // string

let b = Number(a);
console.log(b); //NAN;

let c = "122";
let d = Number(c);
console.log(d); // 122

let e = "123.5";
let f = Number(e);
console.log(f);// 123.5

let  g = "123abc";
let h = Number(g);
console.log(h); // NaN

// "33"--->33
// "33.5"---->33.5
// "33abc"---->NaN  


let i = true; 
let j = Number(i);
console.log(j);//1

// true ---->1 , false --->0

// ----------- Boolean Conversion ----------------

let isLoggedIn = " "; // string
let k = Boolean(isLoggedIn);
console.log(k);
console.log(typeof k);


// 1 --->true , 0 --->false
// string-->""--->false , "kratik"-->true
// undefined---true
// null ---> false

// -----------Number to String----------

let num = 12;
let numm = String(num);
console.log(numm)
console.log(typeof numm)


// *********************Comparisions***************************
// the qquality comp == and comparisions > ,< >=,<= works differently
console.log(null>=0);
console.log(null>0);

// comparaision treat null as 0 .
// triple equal --> strict check 

console.log("2"==2);//true 
console.log("2"===2);// false ---> strict check along with datatype 

