console.log("---------------reducer()-----------------");
arrReduce = [1, 40, 29];
console.log(`arrReduce = [${arrReduce}]`);

// here, we are using the reduce() method to compute the sum of all elements in the array 'arr.
// The reduce() method takes a callback function that is executed for each element of the array, accumulating a value that is returned as the final result.
// This function takes two parameters total and item, which represent the accumulated value and the current element of the array being processed, respectively. It then returns the sum of total and item, which becomes the new total value for the next iteration of the reduce() method.
// two parameters: the 'total accumulated so far and the 'item being processed in the current iteration.
const sumArr = arrReduce.reduce((total, item) => {
  // total = 0 , as the second argument of the reduce() method is the initial value of total, which is set to 0.
  // It returns the added item to the total and returns the new total.
  // console.log(total);
  // console.log(item);
  return total + item;
}, 0); // <= the second argument, which is set to 0.

// The reduce() method uses this callback function to iterate over the elements of the array and return the final accumulated value, which in this case is the sum of all elements in the array.
console.log(`The sum of arrReduce is ${sumArr}`);

const sumArr1 = arrReduce.reduce((a1, a2) => {
  return a1 + a2;
});
console.log(sumArr1);

// Example 2:

const items = [
  { name: "Rice", price: 500 },
  { name: "Books", price: 200 },
  { name: "Chicken", price: 60 },
  { name: "Monitor", price: 1000 },
];
console.log(items);
const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);
console.log(`Total Price using reduce() = ${totalPrice}`);

// Example 3:

// array people of objects representing persons and their ages.
const people = [
  { name: "Isac", age: 24, position: "developer" },
  { name: "Gary", age: 25, position: "manager" },
  { name: "Showy", age: 25, position: "developer" },
  { name: "Rosy", age: 25, position: "hr" },
  { name: "Nazma", age: 24, position: "developer" },
  { name: "Janvi", age: 21, position: "graphic designer" },
  { name: "Moses", age: 30, position: "developer" },
  { name: "Ching", age: 22, position: "ui/ux designer" },
];
// the reduce() method is used to group the persons in the array by age.
// For each person in the array, the callback function retrieves the age of the person and checks if the age key already exists in the groupedPerson object.
const ageGroup = people.reduce((groupedPerson, person) => {
  const age = person.age;
  // if the age key doesn't exist, it creates an empty array for that age key
  if (groupedPerson[age] == null) groupedPerson[age] = [];
  // Then, it pushes the current person into the array for that age key. Finally, it returns the updated groupedPerson object.
  groupedPerson[age].push(person);
  return groupedPerson;
}, {}); // <= second argument to the reduce() method is an empty object {} that will be used as the initial value of the groupedPerson parameter, which accumulates the groups of persons by age.

// After the reduce() method has processed all the elements of the people array, the ageGroup object will contain an array of persons for each distinct age in the original array. The object is then logged to the console using console.log().
console.log(ageGroup);
