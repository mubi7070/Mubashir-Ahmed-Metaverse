/* 45. Cars: Write a function that stores information about a car in a Object. 
The function should always receive a manufacturer and a model name. 
It should then accept an arbitrary number of keyword arguments. 
Call the function with the required information and two other name-value pairs, 
such as a color or an optional feature. Print the Object that’s returned to 
make sure all the information was stored correctly.
*/


const cars = (manufacturer, model, ...items) => {
    return {
        Manufacturer: manufacturer,
        Model: model,
        Other_info: items
    }
};

console.log(cars("Toyota",2022, "red", "2000 CC Engine"));










