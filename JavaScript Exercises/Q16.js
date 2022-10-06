/*16. More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger 
dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 

• Use append() to add one new guest to the end of your list. 

• Print a new set of invitation messages, one for each person in your list. */


var people = ["Syeda Zunaira","Ali","Ammar","Waheed Ahmed","Arsalan"];
console.log("Old List: " + people);


people.unshift("Shahzaib Hussain");  //Add in the beginning
people.splice(2,0,"Taimur") //Add in the Middle
people.push("Tariq Khanani"); //Add in the Last



console.log("New List: " + people);