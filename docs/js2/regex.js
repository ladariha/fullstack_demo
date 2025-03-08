let regex = /^a\d/i;
console.log(regex.exec("a23456"));
process.exit(0);
let regex2 = new RegExp("ab+c", "i");

// \d cislice
// \S non-whitespace
// \s whitespace
regex.test("abbbc"); // true
regex.test("ac"); // false

// debugger
const shoda = /a/g.exec("aaaBBBCCCaaa");
console.log(shoda);


// {
//   const regexA = RegExp("foo*", "g");
//   const str1 = "table football, foosball";
//   let array1;
//
//   while ((array1 = /foo*/g.exec(str1)) !== null) {
//     console.log(`Found ${array1[0]}. Next starts at ${regexA.lastIndex}.`);
//     // Expected output: "Found foo. Next starts at 9."
//     // Expected output: "Found foo. Next starts at 19."
//   }
//
// }


const regex1 = RegExp("foo*", "g");
const str1 = "table football, foosball";
let array1;

while ((array1 = regex1.exec(str1)) !== null) {
  console.log(`Found ${array1[0]}. Next search starts at ${regex1.lastIndex}.`);
  // Expected output: "Found foo. Next starts at 9."
  // Expected output: "Found foo. Next starts at 19."
}
