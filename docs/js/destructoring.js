const testA = ({vek}) => vek;
const testB = ({vek = 0}) => vek;
const testC = ({vek = 0} = {}) => vek;

// console.log(testA());
// console.log(testB());
console.log(testB({}));
console.log(testC());
