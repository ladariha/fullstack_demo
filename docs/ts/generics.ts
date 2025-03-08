const sortByAge = <Entity extends { age: number }>(items: Entity[]) => {
  items.sort((itemA, itemB) => itemA.age - itemB.age);
};

const getElementById = <ElementType = HTMLElement>(selector: string): ElementType => {
  return document.querySelector(selector) as ElementType;
}

type WithAge = {
  age: number;
}

type Person = {
  firstName: string;
  lastName: string;
} & WithAge


type Animal = {
  name: string;
} & WithAge


const people: Person[] = [];
const animals: Animal[] = [];

sortByAge<Person>(people);
sortByAge<Animal>(animals);

getElementById<HTMLTextAreaElement>("text")
getElementById<HTMLButtonElement>("text")
