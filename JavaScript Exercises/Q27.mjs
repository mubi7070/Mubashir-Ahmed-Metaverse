/* 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

let alien_color = "green";     // green

ColorCheck(alien_color);

alien_color = "yellow";       // yellow
ColorCheck(alien_color);

alien_color = "red";       // red
ColorCheck(alien_color);


function ColorCheck (color){
    if (color == "green"){
        console.log("Congrats! you just earned 5 points.");
    }
    else if (color == "yellow") {
        console.log("Congrats! you just earned 10 points.");
    }
    else if (color == "red") {
        console.log("Congrats! you just earned 15 points.");
    }
}