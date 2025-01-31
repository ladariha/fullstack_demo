function test(param, param2) {
  return 1;
}

hoisted();

const test2 = function (param, param2) {
  return 1;
};

const test3 = (param, param2 = 2) => {
  return 1;
};

setTimeout(function () {
}, 1);

const testExp = () => 1;

(function () {
})();


function hoisted() {
  console.log("HOISTED FUNKCE");
}

// bind

const testObject = { name: "testObject" };
const demo = () => {
  console.log("demo jmeno " + this.name);
}
const demo2 = function () {
  console.log("demo2 jmeno " + this.name);
}
const bindedFce = demo.bind(testObject);
console.log(bindedFce());
console.log(demo2.bind(testObject)());

// apply

const demo3 = function (param) {
  console.log("demo3 jmeno " + this.name + " param " + param);
}
console.log(demo3.apply(testObject));
console.log(demo3.apply(testObject, ["mujParametr"]));

console.log(demo3.call(testObject));
console.log(demo3.call(testObject, "mujParametr"));
