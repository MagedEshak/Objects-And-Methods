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
  availability: true,

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

let obj = new Object({
  age: 24,
}); // create new object with new keyword

console.log(obj); 

// create new prop and reassign.
obj.name = "Maged";
obj.age = 25;
obj["country"] = "Egypt";
obj.sayHello = function () {
  return `Hi`;
};

console.log(obj); 

console.log("-".repeat(20));
console.log("5- This Keyword");
console.log("-".repeat(20));

console.log(this);
console.log(this === window);

mVar = 100
console.log(window.mVar);
console.log(this.mVar);

function say() {
    console.log(this);
  return this;
}
say();
console.log(say() === window);

document.getElementById("cli").onclick = function () {
  console.log(this);
};
let userN = {
  age: 25,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(userN.age);
console.log(userN.ageInDays());

console.log("-".repeat(20));
console.log("6- Create Object With Create Method");
console.log("-".repeat(20));

let per = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(per);
console.log(per.age);
console.log(per.doubleAge());

let objec = Object.create({});

objec.a = 100;

console.log(objec);

let copyObj = Object.create(per);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

console.log("-".repeat(20));
console.log("7- Create Object With Assign Method");
console.log("-".repeat(20));
/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);