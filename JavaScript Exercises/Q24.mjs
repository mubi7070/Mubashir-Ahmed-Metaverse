/* 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, 
write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array  */

let name = 'Mubashir';
let address = "A199 Block J";
let number1 = 1;
let number2 = 1;
let number3 = 3;

let arr = ["Ali", "Mubashir", "Saad"]

//Tests for equality and inequality with strings
console.log("Tests for equality and inequality with strings,"); 

console.log("Is name == 'Mubashir'? I predict True.");  // 1
console.log(name == 'Mubashir');

console.log("Is 'Mubashir1' == 'Mubashir'? I predict False.");  // 2
console.log('Mubashir1' == 'Mubashir');

//Tests using the lower case function
console.log("\nTests using the lower case function,"); 

console.log("Is 'mubashir' == name.toLowerCase()? I predict True.");  // 1
console.log('mubashir' == name.toLowerCase());

console.log("Is 'a199 block J' == address.toLowerCase()? I predict False.");  // 2
console.log('a199 block J' == address.toLowerCase());


//Numerical tests involving equality and inequality
console.log("\nNumerical tests involving equality and inequality,"); 

console.log("Is 3 > 1? I predict True.");  // 1
console.log(3 > 1);

console.log("Is 54 >= 55? I predict False.");  // 2
console.log(54 >= 55);

//Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators,"); 

console.log("Is number1 || number2 == 1? I predict True.");  // 1
console.log(number1 || number3 == 1);

console.log("Is number1 && number3 == 1? I predict False.");  // 2
console.log(number1 && number3 == 1);


//Test whether an item is in a array
console.log("\nTest whether an item is in a array,"); 

console.log("Is arr.includes('Zia')? I predict False.");  // 1
console.log(arr.includes("Zia"));

console.log("Is arr.includes('Saad')? I predict True.");  // 2
console.log(arr.includes("Saad"));


//Test whether an item is not in a array
console.log("\nTest whether an item is not in a array,"); 

console.log("Is arr.includes('Zia') == false? I predict True.");  // 1
console.log(arr.includes("Zia") == false);

console.log("Is arr.includes('Saad') == false? I predict False.");  // 2
console.log(arr.includes("Saad") == false);

