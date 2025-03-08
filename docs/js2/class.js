class Zvire {

  promenna = 1;
  #privateVariable = 2;
  static statickaPromenna = 1;

  constructor(jmeno) {
    this.jmeno = jmeno;
    console.log(this.promenna);
    console.log(this.#privateVariable);
    this.#mojemoje();
  }

  #mojemoje(){

  }

  bez() {
    console.log("Zvire utika");
  }

  static create() {
    return new Zvire("?");
  }


}

class Pes extends Zvire {
  constructor() {
    super("pes");
  }

  bez() {
    console.log("pes utika");
  }
}

new Pes().bez()


class MalyPes extends Pes {

}
