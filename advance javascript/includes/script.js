// In JavaScript, the includes() method determines whether a string contains the given characters within it or not. This method returns boolean:  true if the string contains the characters, otherwise, it returns false.
// string.includes(searchvalue, start)
// searchvalue: It is the string in which the search will take place.
//start: This is the position from where the search will be processed  (this parameter is not necessary, if this is not mentioned the search will begin from the start of the string)
console.log("--------------includes()----------------");
var str = "Welcome to Newzealand 123.";
console.log(str);
console.log('Checking if "New" exist?');

var check = str.includes("New");
var checkO = str.includes("o", 3);
// var check = str.includes("2", -2);
console.log(check);
console.log(checkO);
