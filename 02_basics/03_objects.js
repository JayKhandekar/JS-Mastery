// objects can be declared with two ways one with literal and another with constructor.

// singleton (when using constructor)
//Object.create 

// not a singleton when decalred with literal


// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Jay",
    "full name" : "Jay Khandekar" ,
    age : 18,
    [mySym] : "mykey1",
    location: "Mumbai",
    email: "Jayk23@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// // console.log(JsUser[email]);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(typeof JsUser[mySym]);


JsUser.email = "jayk@chatgpt.com";

// Object.freeze(JsUser);
JsUser.email = "jayk@google.com"; 

// console.log(JsUser.email);

// console.log(JsUser);

JsUser.greeting = function (){
        console.log(`Hello JS user, ${this["name"]}`);
};

JsUser.greetingTwo = function (){
    console.log(`Hello JS user, ${this["full name"]}`);
}


console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());