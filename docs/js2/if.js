if (Date.now() > 0) {
  console.log("vetsi");
} else {
  console.log("mensi");
}


console.log(Date.now() > 0 ? "vetsi" : "mensi");


const isNotValid = () => {
};

if (!isNotValid) {
  // uff :/
}

const demoFunction2 = () => {
  return Math.random();
};

const demoFunction = (param) => {
  if (!param) {
    return;
  }


  const alt = demoFunction2();
  return Math.max(alt, param);


};

// exit early
demoFunction();
demoFunction(1);
