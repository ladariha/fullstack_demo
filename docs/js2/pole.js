const arr = [1, 2, 3, 4, 5];

//
// const divnePole = [];
// // divnePole[0] = undefined;
// divnePole[1] = 1;
// // divnePole[2] = undefined;
// divnePole[100000] = 2;
//
// console.log("divnePole delka: " + divnePole.length);
// console.log("divnePole [100000]: " + divnePole[100000]);



// console.log(arr);

// arr.forEach((item, index) => {
//   console.log(item);
//   console.log("INDEX " + index);
// });

// arr.push("a", "b", "c");

// console.log(arr);

// odebere prvni polek
// const prvni = arr.shift();
// console.log("Prvni byl: " + prvni);
//
//
//
// const posledni = arr.pop();
// console.log("posledni byl: " + posledni);
console.log(arr);


// vlozi na zacatek
arr.unshift(0, 0);
console.log("START");




// sort - in place !!!
arr.unshift(10);
console.log(arr);
// pozor, string

console.log(arr.sort((a, b) => a - b));
// console.log(arr);

// process.exit(0);
// console.log("10" < "2" ? "Mensi" : "vetsi");


// some(), every(), map()
const novePole = arr.map(item => `Polozka ${item}`);
console.log(novePole);
console.log(arr.every(item => item > 1));
const kazdaPlati = arr.every(item => item < 1);


