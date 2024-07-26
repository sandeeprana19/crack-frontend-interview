// Ep-01 | call, apply and bind method
let name1 = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + ", " + state
  );
};

printFullName.call(name1, "Dehradun", "Uttarakhand");

let name2 = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

printFullName.call(name2, "Mumbai", "Maharashtra");
