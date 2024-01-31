let age: number = 20;
age = 21;
// age = 'twenty';

let ageAsString: string = 'twenty';
ageAsString = `${age}`;
console.log(ageAsString);
// age = ageAsString;

const add = (v1: number, v2: number) => v1 + v2;

console.log(add(10, 5));
