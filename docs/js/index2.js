console.clear();
const obj = {
  a: 1,
  self: () => obj,
  test: () => this,
  test2: function () {
    return this;
  },
  testConsole: () => {
    console.log("testConsole");
    console.log(this);
  }
  ,
  testConsole2: function () {
    console.log("testConsole2");
    console.log(this);
  },
};

console.log("test2:");
console.log(obj.test2());
console.log("test:");
console.log(obj.test());

console.log("test apply:");
console.log(obj.test.apply({}));
console.log("test2 apply:");
console.log(obj.test2.apply({}));

console.log("self");
console.log(obj.self());

setTimeout(obj.testConsole, 3000);
setTimeout(obj.testConsole2, 3000);
