// const newUser = new Object();
// newUser = {
//     email: "kartik@google.com",
//     fullname: {
//         userFullname: {
//             firstname: "kartik",
//             secondname: "sharma"
//         }
//     }
// }
// Singelton  design  patter  or singelton object 

// const user = (function () {

//     let instance;
//     function createobj() {
//         return {
//             email: "kartik@google.com",
//             fullname: {
//                 userFullname: {
//                     firstname: "kartik",
//                     secondname: "sharma"
//                 }

//             }
//         };
//     }
//     return {
//         ekFunJohCallkegaUperwalleko() {
//             if (!instance) {
//                 instance = createobj();
//             }
//             return instance
//         }

//     };
// })();

// const k = user.ekFunJohCallkegaUperwalleko();

// console.log(k);


// combining two objects


const obj1 = { 1: "k", 2: "a", 3: "r" };
const obj2 = { 4: "t", 5: "i", 6: "k" };

const obj3= Object.assign(obj1,obj2);
console.log(obj3);

