console.log("--------------find()----------------");
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.
// function()(A function to run for each array elemen) and currentValue(The value of the current element.)	Required.

const ages = [3, 10, 18, 20];
console.log(ages);

const noCheck = ages.find(isNo);

function isNo(age) {
  return age > 18;
}

console.log(`Number grexater tha 18 = ${noCheck}`);

//Example 2
console.log(people);
const person = people.find(findRosy);
people.find(findRosy).name;

function findRosy(person) {
  return person.name === "Rosy";
}
console.log(person);
console.log(person.age);
console.log(people.find(findRosy).name);
