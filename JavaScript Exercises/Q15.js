/*15. Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. 

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.

*/


var people = ["Syeda Zunaira","Ali","Ammar","Waheed Ahmed","Arsalan"];
console.log("Old List: " + people);

var notcome=people[2];

people.splice(2, 1, "Imran");

console.log("New List: " + people);



for(var i=0;i < people.length;i++){
    console.log("Dear Mr. " + people[i] +"\nI would like to invite you on a dinner at my home.");
}

console.log("\nUnfortunately, " + notcome + " can't come to the dinner due to an emergency.");