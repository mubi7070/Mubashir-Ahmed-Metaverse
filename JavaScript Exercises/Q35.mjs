/* 35. Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 

• Modify your program to print a statement about each animal, such as A dog would make a great pet. 

• Add a line at the end of your program stating what these animals have in common. 
You could print a sentence such as Any of these animals would make a great pet!
*/

let animal = {
    name: ["Dog", "Cat", "Goat"],
    characteristic: "Pet"
};

for (let i = 0; i < animal.name.length; i++) {
    console.log("A " + animal.name[i] + " can become a great Pet");
}

console.log("At my free time, I love to play with these animals");