const implicitReturn = () => {
  return {
    count: 1,
    name: "demo"
  };
};


const defaultParamType = (param = "neco") => {

};


defaultParamType("neco");

const foo = implicitReturn();
console.log(foo.ahoj);

interface Auto {
  znacka: string;
  cena: number;
}

type Osoba = {
  name: string;
  lastName: string;
  middleName?: string;
}
