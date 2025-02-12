class Something {
}

class MyObject extends Something {
  public name: string;
  public readonly age: number;
  protected parentName: string;
  private email: string;
  public def = 1;

  constructor(name: string) {
    super();
    this.name = name;
  }

  public static create(): MyObject {
    return new MyObject("name");
  }

  public toJSON() {
    return "";
  }
}

const instance = new MyObject("a");
