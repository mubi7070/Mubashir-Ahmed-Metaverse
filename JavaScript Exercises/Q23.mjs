/* 23. Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of 
each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let name = 'Mubashir';
let number = 1;
let number2 = 1;
let number3 = 3;

console.log("Is name == 'Mubashir'? I predict True.");  // 1
console.log(name == 'Mubashir');

console.log("Is Number == '1'? I predict False.");  // 2
console.log(number == "1");

console.log("Is name == 'Mub'? I predict False.");  // 3
console.log(name == "Mub");

console.log("Is typeof Number == String? I predict False.");  // 4
console.log(typeof number == String);

console.log("Is typeof Number == Number? I predict False.");  // 5
console.log(typeof number === Number);

console.log("Is Number == Number2? I predict True.");  // 6
console.log(number === number2);

console.log("Is 3 > 1? I predict True.");  // 7
console.log(3 > 1);

console.log("Is 54 >= 55? I predict False.");  // 8
console.log(54 >= 55);

console.log("Is 1 != true? I predict False.");  // 9
console.log(1 != true);

console.log("Is typeof number == typeof number? I predict True.");  // 10
console.log(typeof number == typeof number);