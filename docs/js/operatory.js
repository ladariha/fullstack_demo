console.log("========== PRIRAZENI ===============");
const auto = { doba: 50, price: 0 };
auto.rychlost ??= 25; // null or undefined?
console.log("    " + auto.rychlost); // 25

auto.doba ??= 10;
console.log("    " + auto.doba);

const hodnota = auto.price || 100;
const hodnotaAlt = auto.price ?? 100;
console.log("    Hodnota: " + hodnota);
console.log("    HodnotaAlt: " + hodnotaAlt);


const jedeAuto = auto.rychlost && auto.doba
console.log("    Jede: " + jedeAuto);
console.log("    Jede opravdu: " + !!jedeAuto);

console.log("========== POROVNANI ===============");

// porovnani
const demoA = "1";
const demoB = 1;
if (demoA == demoB) {
  console.log("    == je true");
}
if ([] == 0) {
  console.log("    [] == 0 true");
}
if (demoA === demoB) {
  console.log("    === je true");
} else {
  console.log(    "=== je false");
}

auto.zrychli?.();

auto.sterac?.pust();


console.log("====== ZKRATKY =========");

let x = 1;

console.log("    X je " + x++);
console.log("    " + x);
console.log("    X je ted " + ++x);
let y = 10;
y += x;
console.log("    Y je " + y);
