interface IPerson {
  name: string;
  age: number;
}

const person: IPerson = {
  name: "Mark",
  age: 39,
};

//IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
/* function getProp(obj: IPerson, key: keyof IPerson): IPerson[keyof IPerson] {
  return obj[key];
}

function setProp(obj: IPerson, key: keyof IPerson, value : string | number): void {
  obj[key] = value;
}*/
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProp(person, 'name');

function setProp<T, K extends keyof T>(obj: T, key: K, value : T[K]): void {
  obj[key] = value;
}

setProp(person, "name", "Anna");