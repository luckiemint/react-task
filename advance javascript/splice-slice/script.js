console.log("--------------slice()--------------------");
const fruity = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("The original array");
console.log(fruity);

// Start position: index 1
// End position: index 3
//So it will take 2 elements from index 1 to index 3: Orange and Lemon
const citrus = fruity.slice(1, 3);
// A new array containing the selected elements.
console.log("A new array containing the selected elements are:");
console.log(citrus);

// Select elements using negative values:
console.log("Another new array containing the selected elements are:");
// Start position: index -3
// End position: index 3
//So it will take 2 elements from index -3 to index -1: Lemon and Apple
// for negative number counts starts from the end of the array
const tasty = fruity.slice(-4, -1);
console.log(tasty);

console.log("--------------splice()--------------------");
// Adding Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
console.log("Adding Lemon and Kiwi from index 2");
// The position to add items: 2
// Number of items to be removed: 0
// Item to be added from index 2: Lemon, Kiwi
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//Removing items
console.log("Removing 2 items from index 2");
// The position to remove items: 2
// Number of items to be removed: 2
fruits.splice(2, 2);
console.log(fruits);

// Add new items, and Remove 1 item:
console.log("Adding two items(Lemon, Kiwi) and Removing 1 items from index 2");
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits);
