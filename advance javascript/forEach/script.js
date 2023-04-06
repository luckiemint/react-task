console.log("-------------foreach()------------------");
//forEach()

arrFE = [100, 20, 30];
console.log(arrFE);

total = 0;
tt = 0;

arrFE.forEach((item) => {
  total += item;
});

console.log(`The total of the above array is ${total}`);

arrFE.forEach((item) => {
  let sq = item * 2;
  console.log(sq);
  tt += sq;
});

console.log(`The total of the above elements = ${tt}`);

//Example 2:
console.log(items);

let totalPriceFE = 0;
items.forEach((item) => {
  totalPriceFE += item.price;
});
console.log(`Total Price using forEach() = ${totalPriceFE}`);
