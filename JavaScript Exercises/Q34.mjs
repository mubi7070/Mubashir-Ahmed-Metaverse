/* 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, 
and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. 
For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. 
The output should consist of three or more lines about the kinds of pizza you like and then an 
additional sentence, such as I really love pizza!
*/

let fav_pizza = ["Afghani Pizza", "Chicken Fajita Pizza", "Malai Pizza", "Cheese Lover Pizza"];

console.log("List of Favourite Pizzas,");
for (let index = 0; index < fav_pizza.length; index++) {
    console.log("I eat " + fav_pizza[index] + "once in a week!");
}

console.log("At the time of watching cricket match, I loved to eat Pizza with cold drink");