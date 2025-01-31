const arr = [];
for (var index = 0; index < 3; index++) {
  arr.push(() => index);
}
console.log(arr.map(x => x())); // [3,3,3]


const arr2 = [];
for (let i = 0; i < 3; i++) {
  arr2.push(() => i);
}

console.log(arr2.map(x => x())); // [0,1,2]

