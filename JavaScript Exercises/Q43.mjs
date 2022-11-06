/* 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a 
copy of the array of magicians’ names. Because the original array will be unchanged, return the new array 
and store it in a separate array. Call show_magicians() with each array to show that you have one array of
 the original names and one array with the Great added to each magician’s name.
*/

let arr = ["Goldie", "Magicalian", "Magician Mubashir"];

const phrase = (mag_name) => {
    return "The Great " + mag_name;
};

const make_great = (names) => {
    for (let j = 0; j < names.length; j++) {
        names[j] = phrase(names[j]);
    }
    return names;
};


let show_magicians = (names) => {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
};

show_magicians(arr); // Original Array

let arr2 = [...arr];

arr2 = make_great(arr2);

console.log("\n");
show_magicians(arr2);

