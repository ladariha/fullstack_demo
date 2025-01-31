
const testA = ({jmeno}) => {
  console.log(jmeno);
};
const testB = ({vek = 0}) => vek;
const testC = ({vek = 0} = {}) => vek;

console.log(testA({ jmeno: "Jan", vek: 30 }));
console.log(testC());
console.log(testB({}));
console.log(testC());
