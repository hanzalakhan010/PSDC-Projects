// Reversing string

function reverseInteger(integer) {
    // integer = Math.abs(integer)
    if (integer < 0) { integer *= -1 }
    integerAsString = integer.toString()
    newString = ''

    for (let i = integerAsString.length - 1; i >= 0; i--) {
        newString += integerAsString[i]
    }
    return Number(newString)

}

// Assignments


// Assignment 1
// create a function that generates random number in given
// range 
// console.log(reverseInteger(-1923000))
function getRandomIneger(min, max) {
    return Math.floor(Math.random() * max) + min
}
num = getRandomIneger(5, 20)
console.log(num)


// for thesting purposes
for(let i =0;i<10;i++){

if (num>20 && num<5){
    console.log(num)
}
}
