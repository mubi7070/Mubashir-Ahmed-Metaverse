/* 42. Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the 
phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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

arr = make_great(arr);

console.log("\n");
show_magicians(arr);

