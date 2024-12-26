console.log("1- Object – Introduction");
console.log("-".repeat(20));

let user = {
  // properties
  theName: "Maged",
  theAge: 25,

  //Methods
  sayHello : function () {
    return `Hello`;
  },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());

console.log("-".repeat(20));
console.log("2- Dot Notation vs Bracket Notation");
console.log("-".repeat(20));

let myVar = "country";

let use = {
  // properties
  theName: "Maged",
  country: "Egypt",
  "age": 25,
};
console.log(use.theName); // Dot notation
console.log(use["age"]); // Bracket notation
console.log(use[myVar]); // Bracket notation

console.log("-".repeat(20));
console.log("3- Nested Object And Advanced Examples");
console.log("-".repeat(20));



console.log("-".repeat(20));
console.log("4- Create Object With New Keyword");
console.log("-".repeat(20));



console.log("-".repeat(20));
console.log("5- This Keyword");
console.log("-".repeat(20));


console.log("-".repeat(20));
console.log("6- Create Object With Create Method");
console.log("-".repeat(20));


console.log("-".repeat(20));
console.log("7- Create Object With Assign Method");
console.log("-".repeat(20));
