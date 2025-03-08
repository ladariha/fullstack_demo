const user = { name: "Bob", age: 25 };

// for (let key in user) {
//   console.log(key);
//   console.log(user[key])// "name", "age"
// }
// process.exit(0);
const arr = ["a", "b", "c"];

// for (let index in arr) {
//   console.log(index);  // 0, 1, 2
//   console.log("Hodnota: " + arr[index]);
// }

// for-of nelze pro objekty, jen mapa/pole/set/iterable
for (let value of arr) {
  console.log(value);  // "a", "b", "c"
}
