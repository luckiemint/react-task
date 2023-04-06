console.log("------------filter()---------------------");
const a = [10, 5, 90, 556, 3, 6];
console.log(a);
const a2 = a.filter((item) => {
  return item > 10;
});
const a3 = a.filter((item) => item < 10);
console.log(`I am returning number(s) greater than 10: ${a2}`);
console.log(`I am returning number(s) less than 10: ${a3}`);

// Exampple 2:
console.log(people);
const findDevelopers = people.filter(
  (person) => person.position === "developer"
);
console.log(findDevelopers);
