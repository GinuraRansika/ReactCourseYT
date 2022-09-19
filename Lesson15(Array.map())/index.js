// ! Challenge 01
const numbersArray = [1, 2, 3, 4, 5];
/* 
    * .map() is a higher order method which means it takes a function as its main parameter
    * .map() loops over the array for and runs the function
    * .map() will return a new array with newly updated values
    * function will get each of the array items one at a time 
*/

console.log(numbersArray)
const squaredNumbersArray = numbersArray.map(function(item){
    return item * item
})
console.log(squaredNumbersArray)


// ! Challenge 02
const namesArray = ["alice", "bob", "charlie", "danielle"]
console.log(namesArray)
const capitalizedNamesArray = namesArray.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1)
})
console.log(capitalizedNamesArray)
/*
const capitalizedNamesArray = namesArray.map(name => name.charAt(0).toUpperCase() + name.slice(1))
*/


// ! Challenge 03
const stringsArray = ["Blubasaur", "Charmander", "Squirtle"]
console.log(stringsArray)
const pTagArrays = stringsArray.map((item) => {
    let updatedItem = "<p>" + item + "</p>"
    // return `<p>${item}</p>`
    return updatedItem
})
console.log(pTagArrays)

