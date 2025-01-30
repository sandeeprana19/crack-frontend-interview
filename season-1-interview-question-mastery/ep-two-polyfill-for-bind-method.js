// Ep-02 | Polyfill for Bind Method
const name = {
  firstName: "Akshay",
  lastName: "Saini",
};

let printFullName = function () {
  console.log(this.firstName + " " + this.lastName);
};

let printMyName = printFullName.bind(name);

printMyName();

Function.prototype.myBind = function () {
  return function () {};
};

let printMyName2 = printFullName.myBind(name);
printMyName2();
