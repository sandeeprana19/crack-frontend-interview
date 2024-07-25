// Ep-01 | call, apply and bind method
let name = {
  firstName: "Akshay",
  lastName: "Saini",
  printFullName: function () {
    console.log(this.firstName + " " + this.lastName);
  },
};

name.printFullName();
