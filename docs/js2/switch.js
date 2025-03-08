const evaluate = (v) => {
  console.log("eval called: " + v);
  return v;
};

const someVariable = 1;

switch (someVariable) {
case evaluate(1):
  console.log("je to 1");
  break;
case evaluate(2):
  console.log("je to 2");
default:
  console.log("NIC");
  break;
}

// const expression = 10 - 5;
//
// switch (expression) {
// case 1:
//   console.log("The result is 1");
//   break;
//
// case 5:
//   console.log("The result is 5");
//   break;
//
// case 10:
//   console.log("The result is 10");
//   break;
//
// default:
//   console.log("The result does not exist");
// }
//
//
// console.log("no break;");
// switch (expression) {
// case 1:
//   console.log("The result is 1");
//
// case 5:
//   console.log("The result is 5");
//
// case 10:
//   console.log("The result is 10");
//
// default:
//   console.log("The result does not exist");
// }
