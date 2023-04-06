// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.
console.log("---------------map()------------------");
array = [1, 4, 5, 6];
console.log(array);
array.map((i, index, array) => {
  //   console.log(`${index}: ${i}`);
  console.log(index, i, array);
});
const newArr = array.map(myFunction);

function myFunction(num) {
  return num * 10;
}
console.log(newArr);

// Example 2:
console.log(items);
total = 0;
const mapTotal = items.map((item) => {
  //   return item.price * 10;
  total += item.price;
});
console.log(`Total cost = ${total}`);

//Example 3
const persons = [
  { firstname: "Malcom", lastname: "Reynolds", age: 32 },
  { firstname: "Kaylee", lastname: "Frye", age: 32 },
  { firstname: "Jayne", lastname: "Cobb", age: 32 },
  { firstname: "Kanye", lastname: "West", age: 49 },
];
console.log(persons);

const fullname = persons.map(getFullName);
function getFullName(person) {
  return [person.firstname, person.lastname].join(" ");
}
console.log(fullname);

// const getAge = persons.map(ageGroups);
// function ageGroups(person) {
//   return [person.age];
// }
// console.log(getAge);
const ageGroups = people.map((person) => {
  return person.age;
}, {});
console.log(ageGroups);
