interface MujInterface {
  getName: () => string;
}
interface MujInterface2 {
  getName2: () => string;
}
class Neco implements MujInterface, MujInterface2 {
  getName() {
    return ";";
  }

  getName2() {
    return ";";
  }
}
