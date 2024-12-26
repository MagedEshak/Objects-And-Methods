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

let person = {
  // properties
  theName: "Maged",
  theAge: 25,
  skills: ["HTML", "CSS", "JS"],
  availability: false,

  // Nested Object
  country: {
    ksa: "Riyadh",
      // Nested Object
    egypt: {
      one: "Assuit",
      two: "Cairo",
    },
  },
// function to check if person Free to Hire or not
  CheckAV: function () {
    if (person.availability === true) {
      return `Free to Hire`;
    } else {
      return `Not Free to Hire`;
    }
  }
};
console.log(person.theName); // Dot notation
console.log(person.theAge); 
console.log(person.skills); // Array
console.log(person.skills.join(" | ")); // HTML | CSS | JS
console.log(person.skills.push("React")); // item number
console.log(person.skills[3]); // index 3 in array = React
console.log(person.availability); 
console.log(person.country); 
console.log(person.country.ksa); // Riyadh
console.log(person.country.egypt.one); // Assuit
console.log(person["country"]["egypt"]["two"]); // Bracket notation => cairo
console.log(person.CheckAV()); // checking availability

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
