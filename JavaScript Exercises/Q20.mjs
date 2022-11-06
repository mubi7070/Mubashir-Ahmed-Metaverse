/* 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, 
countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/

let NoOfEntries = prompt("Enter total number of countries you want to enter in the list");
let arr = [];

for (let index = 0; index < NoOfEntries; index++) {
    let iteration = index + 1;
    let value = prompt("Enter country name " + iteration);
    arr.push(value);
}

console.log("Countries: " + arr);