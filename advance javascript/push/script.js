console.log("-----------push()--------------------");
// se the JavaScript array push() method to append one or more elements to an array
pushArr = [10, 20, 20, 50];
console.log(pushArr);
// here we are trying to push the number 23 and 25 into the array called pushArr
pushArr.push(24, 45);
// the elements are addes at the end
console.log(pushArr);

pushString = ["gee", "bee", "lee"];
console.log(pushString);
pushString.push("zee", "jee", "tee");
console.log(pushString);
//the pop() removes the lasy element inn the array
pushString.pop();
console.log(pushString);

// we can also check the length
const pushLength = pushString.push("mee");
console.log(`The length of the above array is ${pushLength}`);

// Now we will Use the push() to append elements of an array to another array
let colors = ["red", "green", "blue"];
let cmyk = ["cyan", "magenta", "yellow", "back"];
console.log(colors);
console.log(cmyk);
for (const color of cmyk) {
  colors.push(color);
}
console.log(colors);

//We can use the spread operator (...) to spread the elements of the cmyk array and push them to the colors array at the same time like this:
let cols = ["pink", "white"];
colors.push(...cols);
console.log(colors);

const arr = [];
const obj = { name: "Jeff", age: 30 };
const obj1 = { name: "Samantha" };
const obj2 = { name: "Chris" };
const obj3 = { name: "Mike" };
// Push object to array
arr.push(obj, obj1, obj2, obj3);
console.log(arr);

const arr0 = [{ name: "lily" }, { name: "John" }];
console.log(arr.concat(arr0));
