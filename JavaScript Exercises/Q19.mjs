/* 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of 
people you are inviting to dinner.
*/

var people = ["Syeda Zunaira","Ali","Ammar","Waheed Ahmed","Arsalan"];
people.sort();

for(var i=0;i < people.length;i++){
    console.log("Dear Mr. " + people[i] +"\nI would like to invite you on a dinner at my home.");
}

console.log("\nTotal number of people you are inviting to dinner: " + people.length);