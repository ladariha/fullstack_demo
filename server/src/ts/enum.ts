enum Odpoved {

  Ano,
  Mozna,
  CoKdyby
}

const demo = (param?: Odpoved) => {
  if (!param) {
    console.log("Rikam NE");
  }
};
demo(Odpoved.Ano);
demo(1);

enum OdpovedLepsi {
  Ano = "ano",
  Ne = "ne",
  Mozna = "mozna"
}

type MozneOdpoved = "ano" | "ne" | "mozna";

const demo2 = (param: OdpovedLepsi) => {};

demo2("ano");
demo2(OdpovedLepsi.Ano);
