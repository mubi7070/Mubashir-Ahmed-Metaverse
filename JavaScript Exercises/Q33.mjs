/* 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
end in th, except 1, 2, and 3.

• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
*/

let Num = [];

for (let i = 0; i < 9; i++) {
    Num.push(i+1);
}

// console.log(Num);

for (let index = 0; index < Num.length; index++) {
    if (Num[index] == 1){
        console.log(Num[index] + "st");
    }
    else if (Num[index] == 2){
        console.log(Num[index] + "nd");
    }
    else if (Num[index] == 3){
        console.log(Num[index] + "rd");
    }
    else if (Num[index] >= 4){
        console.log(Num[index] + "th");
    }
    console.log();
}