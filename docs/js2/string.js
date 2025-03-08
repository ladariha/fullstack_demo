// const multiLine = `
// Hodne
// radku
// textu ${new Date().toLocaleTimeString()}
// `;
//
// const pro = 'Hodne\nradku\ntextu ' + new Date().toLocaleTimeString()
//
// console.log(multiLine);

//
// console.log("Delka je " + "ahoj".length);
// console.log("Delka je " + "🎂".length);

// // znak na indexu
// console.log("ahoj".charAt(0));
// console.log("🎂".charAt(0));

console.log("ahoj".split("")[0]);
console.log("dort 🎂".split("").reverse().join(""));
process.exit(0);
console.log("ahoj".indexOf("j"));
console.log("ahoj".replace("o", "oo"));


// debugger
const shoda = "ahoj".match(/a/);
console.log(shoda);
