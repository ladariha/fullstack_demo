type Auto = { rychlost: number; znacka: string };

type AutoKeys = keyof Auto;
// ekvivalent  type AutoKeys = "rychlost" | "znacka" ;

const getProperty = (auto: Auto, key: AutoKeys) => {
  return auto[key];
};

const x = { a: 1 };
type Foo = typeof x;

const fnc = (a: number): string => `${a}`;
type ToString = typeof fnc;

const a = 1 as unknown as string;
