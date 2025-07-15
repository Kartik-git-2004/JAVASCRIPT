//objets

let jsUser = {
name:"kartik",
age:21,
location:"jammu",

}
console.log(jsUser);
console.log(jsUser["name"]);

// changing value in object
jsUser.location="Odisha";
console.log(jsUser);

// in below method we see how to lock the object .
// Object.freeze(jsUser);
jsUser.location="Bengluru";
console.log(jsUser);

// functions in objects
jsUser.greeting = function(){
    console.log("hello g ");
}
console.log(jsUser.greeting());

//
console.log(`hello my name is ${jsUser.name}`);