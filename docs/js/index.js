console.clear();
var a = "a tady";
const b = "b tady";

if (true) {
  const c = "c tady";
  var d = "d tady";
}

const test = () => {
  console.log(a);
  console.log(b);
  console.log(typeof c);
  console.log(typeof d);
};

// console.log(c)
// b = "nova hodnota"

const o = {
  data: () => {
    console.log("data");
  },
};
o["data"]?.();
o["data2"]?.();
test();
